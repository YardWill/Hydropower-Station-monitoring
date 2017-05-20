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
        title: 'Hello Koa 2!',
    });
});

module.exports = router;
