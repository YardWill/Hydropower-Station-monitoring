const router = require('koa-router')();
const send = require('./send.js');

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
    });
});

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
    ctx.body = require('./mock/modbus.js');
});

router.get('/alert', async (ctx, next) => {
    ctx.body = require('./mock/alert.js');
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
