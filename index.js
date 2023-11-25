import dotenv from 'dotenv';
dotenv.config();
import api from './src/server.js'

const server = api.listen(process.env.API_PORT,() => {
    console.log(`Server is running in http://localhost:${server.address().port}${process.env.API_ROOT}/${process.env.API_LTS}/`)
})