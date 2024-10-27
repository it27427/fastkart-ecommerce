const handleResponse = (
  res,
  errorCode,
  success = false,
  message = 'An error occurred',
  errorDetails = null
) => {
  return res.status(errorCode).json({
    success: success,
    message,
    error: errorDetails,
  });
};

module.exports = { handleResponse };
