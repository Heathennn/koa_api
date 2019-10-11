const {HttpException} = require('../core/http_exception')
const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if ( error instanceof HttpException ) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.status;
        }
    }
}

module.exports = catchError