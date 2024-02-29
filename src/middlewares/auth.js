export default function AuthMiddleware(request, response,next) {
    console.log({body: request.body})
    next()
}