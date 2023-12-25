import dotenv from 'dotenv';
dotenv.config();
import api from './src/server.js'

const routes = ['api/v1/orders','api/v1/users','api/v1/companies','api/v1/auth', 'api/v1/']
const server = api.listen(process.env.API_PORT,() => {
    console.log(`Server is running in http://localhost:${server.address().port}${process.env.API_ROOT}/${process.env.API_LTS}/`)
    console.log('Availables routes on the api: \n')
    routes.forEach((route) => {
        console.log(`http://localhost:${process.env.API_PORT}/${route}`)
    })
})