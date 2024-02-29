import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParse from 'cookie-parser'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import * as Sentry from '@sentry/node'
import {ProfilingIntegration } from '@sentry/profiling-node'


//routers
import AuthRouter from './routes/auth.js'
import UserRouter from './routes/users.js'
const app = express()

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [new ProfilingIntegration()],
    tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
})

app.use(Sentry.Handlers.requestHandler())

app.use(express.urlencoded({extends:true}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(cookieParse())
app.use(morgan('dev'))
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 200
}))


//routing settings
app.use('/auth',AuthRouter)
app.use('/user',UserRouter)


// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  console.log({err})
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

export default app