export default async function ErrorHandler(error, request, response, next) {
    response.json({
        message: error.message,
        code: error.code
    })
}