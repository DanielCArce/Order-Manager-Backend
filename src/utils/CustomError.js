
class CustomError extends Error{
    constructor(message, code) {
        super(message)
        this.code = code
    }
    getCode() {
        return this.code
    }
    setCode(code) {
        this.code = code
    }
}

export default CustomError