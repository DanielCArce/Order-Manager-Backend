import express from 'express'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import compress from 'compression'
import cookieParser from 'cookie-parser'
//routes
import IndexRoutes from '@routes/IndexRouter'
import UserRoutes from '@routes/UserRouter'
import OrderRoutes from '@routes/OrderRouter'
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({
    origin: ['*'],
}))
app.use(helmet({}))
app.use(compress())
app.use(cookieParser())
if (process.env.NODE_ENV != "Development") {
    app.use(rateLimit({
        limit: 3,
        windowMs: 30 * 60 * 15
    }))
}

//Set Routes endpoints
app.use('/api', IndexRoutes)
app.use('/api/v1/users', UserRoutes)
app.use('/api/v1/orders', OrderRoutes)


export default app;