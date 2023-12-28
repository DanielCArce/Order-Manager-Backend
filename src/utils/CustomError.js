class CustomError extends Error{
    constructor(message,name, type, code) {
        super(message)
        this.type = type
        this.name = name
        this.code = code
    }
    details() {
        return `[${this.type}]: ${this.code} - ${this.name}`
    }
    code() {
        return this.code
    }
}
export default CustomError