class ApiError extends Error{
    constructor(status, typeError, message) {
        super(message)
        this.status = status
        this.typeError = typeError
    }
}
export default ApiError