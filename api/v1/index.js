const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const router = new Router();

router.get('/index', async (ctx) => {
    ctx.body = {
        name: 'index',
        code: 200,
        msg: 'success'
    }
})

module.exports = router