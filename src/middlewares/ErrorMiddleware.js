export default function ErrorMiddleware(error, request, response, next) {
    // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  console.log({t:err})
  res.status(500)
  res.end(res.sentry + "\n");
}