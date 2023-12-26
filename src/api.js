//core
import express from 'express'
//deps
import cors from 'cors'
import cookieparser from 'cookie-parser'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'

//internal modules
import ErrorHandler from './middlewares/ErrorHandler.js'

//routers import
import AuthRoute from './v1/routes/auth.js'
//run
const app = express()

//middleware using

app.use(cors())
app.use(helmet({ hidePoweredBy: true }))
app.use(morgan('dev'))
app.use(compression())
app.use(cookieparser({}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//routing
app.use('/api/v1/auth',AuthRoute)


//error handler

app.use(ErrorHandler)


export default app