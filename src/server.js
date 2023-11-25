//depes
import express from 'express'
//import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'


//init
const app = express()

//globals midlewares
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes


export default app;