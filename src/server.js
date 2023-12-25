//depes
import express from 'express'
// import {client} from './utils/cache.js'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import ErrorHandler from './middleware/ErrorHandler.js'

import orderRouter from './v1/routes/Orders.js';
import companyRouter from './v1/routes/Companies.js'
import userRouter from './v1/routes/Users.js'
import authRouter from './v1/routes/Auth.js';
//init
const app = express()
// client.connect()
//globals midlewares
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/companies', companyRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/auth',authRouter)


app.use(ErrorHandler)
export default app;