export async function extractAuthorizationHeader(rawHeader) {
    const rawToken = rawHeader['authorization']
        if (rawToken == undefined || rawToken == null || rawToken == "") {
            return null
        }
    const token = rawToken.split(' ')[1]
    return token
}