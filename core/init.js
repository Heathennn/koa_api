const requireDirectory = require('require-directory')
const Router = require('koa-router')
class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoadRouters()
        InitManager.initHttpException()
    }

    static initLoadRouters() {
        const apiDir = `${process.cwd()}/app/api`;
        requireDirectory(module, apiDir, {
            visit: whenLoadModule
        });
        
        function whenLoadModule(obj) {
            if ( obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }

    static initHttpException() {
        const errors = require('./http_exception')
        console.log(errors)
        global._e = errors;
    }
}


module.exports = InitManager