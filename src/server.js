import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import cookiesParser from 'cookie-parser'
import * as Sentry from "@sentry/node";
import { ProfilingIntegration } from "@sentry/profiling-node";

//custom middlewares
// import ErrorMiddleware from './middlewares/errors.js'

import authRoutesV1 from './v1/routes/auth.js'
import ordersRoutesV1 from './v1/routes/orders.js'
import invoicesRoutesV1 from './v1/routes/invoices.js'
import usersRoutesV1 from './v1/routes/users.js'

const app = express()
Sentry.init({
  dsn: "https://b4268284485b1b3de1a27644243151c2@o163098.ingest.sentry.io/4506474550591488",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
//middlwares deps
// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(cookiesParser())
app.use(compression())

app.use('/api/v1/auth',authRoutesV1)
app.use('/api/v1/orders', ordersRoutesV1)
app.use('/api/v1/invoices',invoicesRoutesV1)
app.use('/api/v1/users', usersRoutesV1)

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});



// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

export default app