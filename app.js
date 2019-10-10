const Koa = require('koa')
const config  = require('./config')
const app = new Koa();
const Router = require('koa-router')
const requireDir = require('require-directory')
const apiDir = `${process.cwd()}/api`

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