
module.exports = {
  sendSuccess(data, res, status, message) {
    const response = {
      status: true,
      message: 'success',
      result: {
        code: status,
        message,
        data,
      },
      responseCode: 200,
    };
    const errorCode = 200;
    res.status(errorCode || 200).json(response);
  },

  sendCustomError(data, res, status, message) {
    // let resp = { ...data, "message": message}
    const response = {
      status: false,
      message: 'failure',
      result: {
        code: status,
        message,
        // data: resp
      },
      responseCode: 500,
    };
    const errorCode = 500;
    res.status(errorCode || 500).json(response);
  },
  sendNoDataSuccess(data, res, status, message) {
    const response = {
      status: false,
      message: 'success',
      result: {
        code: status,
        message,
        data,
      },
      responseCode: 204,
    };
    const errorCode = 409;
    res.status(errorCode || 409).json(response);
  },
};
