async function ErrorHandler(error, request, response, next) {
    switch (error.type) {
        case "Database":
            response.sendStatus(503)
            break;
        case "Authentication":
            response.sendStatus(511)
            break;
    }
}

export default ErrorHandler