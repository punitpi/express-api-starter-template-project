function notFound (req, res, next) {
  res.status(404)
  const error = new Error(`Page Not Found - ${req.originalUrl}`)
  next(error)
}

function errorHandler (err, req, res, next) {
  let statusCode =
    res.statusCode !== 200
      ? res.statusCode || err.status || err.statusCode
      : 500
  if (statusCode < 400) statusCode = 500
  res.status(statusCode)

  if (statusCode >= 500) {
    console.error(err.stack)
    res.json(err)
    return
  }

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? 'Error' : err.stack
  })
}

module.exports = {
  notFound,
  errorHandler
}
