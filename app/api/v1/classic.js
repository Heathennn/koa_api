const Router = require('koa-router')
const router = new Router()
router.post('/v1/classic/a', (ctx, next) => {
    const path = ctx.params;
    const query = ctx.request.query;
    const headers = ctx.request.header;
    const body = ctx.request.body;
    if ( true ) {
        console.log(global._e.ParameterException)
        const error = new global._e.ParameterException();
        throw error
    }
    ctx.body = { id: 1, name: 'classic'}
})

module.exports = router