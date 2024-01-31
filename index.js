import dotenv from 'dotenv'
import app from './src/server.js'
dotenv.config()
const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || '0.0.0.0'
const RESOURCES = ['/api/','/api/v1/users','/api/v1/auth','/api/v1/orders','/api/v1/clients-providers']

const server = app.listen(PORT,HOST, () => {
    console.log(`Server is running in ${server.address().address}:${server.address().port}/api/v1/`)
    RESOURCES.forEach((resource) => {
        console.log(`Resource endpoint: ${resource}`)
    })
})
