const Koa = require('koa')
const config  = require('./config')
const Router = require('koa-router')
const bodyparser =  require('koa-bodyparser')
const requireDir = require('require-directory')
const catchEror = require('./middlewares/exception')
const apiDir = `${process.cwd()}/api`

const app = new Koa();
app.use(catchEror)
app.use(bodyparser)
// 批量引入文件
requireDir(module, apiDir, {
    visit: (obj) => {
        if (obj instanceof Router) {
            app.use(obj.routes())
        }
    }
})

app.listen(config.port, config.host, () => {
    console.log(`App is running at http://${config.host}:${config.port}`)
})