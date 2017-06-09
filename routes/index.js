const router = require('koa-router')();
const send = require('./send.js');

let state = true;

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: '水电站远程管理系统',
    });
});

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
    const data = require('./mock/modbus.js');
    ctx.body = { state, data };
});

router.get('/alert', async (ctx, next) => {
    ctx.body = require('./mock/alert.js');
});

router.get('/state', async (ctx, next) => {
    ctx.body = state;
});

router.get('/stop', async (ctx, next) => {
    state = false;
    ctx.body = { success: true };
});

router.get('/start', async (ctx, next) => {
    state = true;
    ctx.body = { success: true };
});

router.get('/send', async (ctx, next) => {
    if (ctx.query.phone) {
        send(ctx.query.phone);
        ctx.body = { success: true };
    } else {
        ctx.body = { success: false, message: '手机号码缺失' };
    }
});

module.exports = router;
