import dotenv from 'dotenv';
dotenv.config();
import api from './server.js'

api.listen(process.env.API_PORT,() => {
    console.log(`Server is running in http://localhost:${process.env.API_PORT}${process.env.API_ROOT}`)
})