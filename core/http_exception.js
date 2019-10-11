class HttpException extends Error{
    constructor(msg='服务器出错了嗷┗||┛ ~~', errorCode="1001", code="400") {
        super()
        this.msg = msg
        this.errorCode = errorCode
        this.status = code
    }
}

// 参数错误
class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.status = 400
        this.msg = msg || '参数错误'
        console.log(this.msg)
        this.errorCode = errorCode || 1002
    }
}
// more exception
// ... 
module.exports = {
    HttpException,
    ParameterException
}