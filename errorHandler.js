//here's the error handler code
function errorHandler(err, req, res, next) {
  if (err.stack) {
    res.status(500).json({ message: err });
  }
}
module.exports = errorHandler;
