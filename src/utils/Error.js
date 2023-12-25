class ApiError extends Error{
    constructor(typeError, message, meta={}) {
        super(message)
        this.meta = meta
        this.code = typeError
    }
}
export default ApiError