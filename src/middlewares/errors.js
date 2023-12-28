export default async function ErrorMiddleware(error, request, response) {
    response.status(401).json({message: error.details()})
}