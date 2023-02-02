//depes
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

//routers
import routeIndex from './routes/index.js'
import routeClient from './routes/clients.js'
import routeOrder from './routes/orders.js'

//init
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1', routeIndex)
app.use('/api/v1/clients', routeClient)
app.use('/api/v1/orders',routeOrder)
export default app;