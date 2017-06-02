// 修改为您的apikey.可在官网（https://www.yunpian.com)登录后获取
const https = require('https');
const qs = require('querystring');

const apikey = 'e051dd33298f24e22220fa69b501d68f';
// 修改为您要发送的手机号码，多个号码用逗号隔开
const mobile = '15700084187';
// 修改为您要发送的短信内容
const text = '【水电站管理系统】水电站出现警报，请及时登入系统查看详细内容。';
// 指定发送的模板编号
const tpl_id = 1;
// 指定发送模板的内容
const tpl_value = { '#code#': '1234', '#company#': '水电站管理系统' };
// 语音短信的内容
const code = '1234';
// 查询账户信息https地址
const get_user_info_uri = '/v2/user/get.json';
// 智能匹配模板发送https地址
const sms_host = 'sms.yunpian.com';
const voice_host = 'voice.yunpian.com';

const send_sms_uri = '/v2/sms/single_send.json';
// 指定模板发送接口https地址
const send_tpl_sms_uri = '/v2/sms/tpl_single_send.json';
// 发送语音验证码接口https地址
const send_voice_uri = '/v2/voice/send.json';

function post(uri, content, host) {
    const options = {
        hostname: host,
        port: 443,
        path: uri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
    };
    const req = https.request(options, (res) => {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
    });
    // console.log(content);
    req.write(content);

    req.end();
}

function query_user_info(uri, apikey) {
    const post_data = {
        apikey,
    }; // 这是需要提交的数据
    const content = qs.stringify(post_data);
    post(uri, content, sms_host);
}

function send_sms(uri, apikey, mobile, text) {
    const post_data = {
        apikey,
        mobile,
        text,
    }; // 这是需要提交的数据
    const content = qs.stringify(post_data);
    post(uri, content, sms_host);
}

function send_tpl_sms(uri, apikey, mobile, tpl_id, tpl_value) {
    const post_data = {
        apikey,
        mobile,
        tpl_id,
        tpl_value: qs.stringify(tpl_value),
    }; // 这是需要提交的数据
    const content = qs.stringify(post_data);
    post(uri, content, sms_host);
}

function send_voice_sms(uri, apikey, mobile, code) {
    const post_data = {
        apikey,
        mobile,
        code,
    }; // 这是需要提交的数据
    const content = qs.stringify(post_data);
    console.log(content);
    post(uri, content, voice_host);
}


// send_voice_sms(send_voice_uri, apikey, mobile, code);

const sendSms = (phone) => {
    query_user_info(get_user_info_uri, apikey);

    send_sms(send_sms_uri, apikey, phone, text);

    // send_tpl_sms(send_tpl_sms_uri, apikey, phone, tpl_id, tpl_value);
};

module.exports = sendSms;
