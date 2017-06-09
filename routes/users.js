const router = require('koa-router')();

router.prefix('/users');

router.get('/', (ctx, next) => {
    ctx.body = 'this is a users response!';
});

router.get('/bar', (ctx, next) => {
    ctx.body = 'this is a users/bar response';
});

router.get('/login', async (ctx, next) => {
    await ctx.render('login', {
        title: '水电站远程管理系统',
    });
});

module.exports = router;
