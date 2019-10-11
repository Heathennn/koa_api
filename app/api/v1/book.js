const Router = require('koa-router')
const router = new Router()

router.get('/v1/book', (ctx, next) => {
    ctx.body = { id: 1, name: 'book'}
})

router.post('/v1/book/:id', (ctx, next) => {
    const param = ctx.request.param
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.req.body
    ctx.body = {
        name: 'book'
    }
})

module.exports = router;