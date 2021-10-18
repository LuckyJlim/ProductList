export const errorLogger = (err, req, res, next) => {
  console.error(err);
  next(err);
}

export const errorResponder = (err, req, res, next) => {
  res.header("Content-Type", 'application/json');
  res.status(err.statusCode || 500).json({err:err.message});
}
