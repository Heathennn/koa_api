const Koa = require('koa')
const parser = require('koa-bodyparser')
const Router = require('koa-router')
const catchError = require('./middlewares/exception')
const app = new Koa()
// 全局异常捕捉
app.use(catchError)
// post请求 body解析
app.use(parser())

// 初始化router
const InitManager = require('./core/init');
InitManager.initCore(app);

app.listen(3001)
