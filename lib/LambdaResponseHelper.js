// const { logger } = require('../logger');

const headers = {
  'Access-Control-Allow-Origin': process.env.ACCESS_CONTROL_ALLOW_ORIGIN || '*',
};

/**
 * creates an HTTP JSON Response
 *
 * @param {*} data
 */
const createSuccessHTTP = (data) => {
  const response = {
    statusCode: 200,
    headers,
    body: JSON.stringify(data),
  };
  return response;
};

/**
 * creates an HTTP Error response
 *
 * @param {*} options
 */
const createErrorHTTP = ({ code = 400, message, error, errors }) => {
  const response = {
    statusCode: code,
    headers,
    body: JSON.stringify({
      message,
      code,
      error,
      errors,
    }),
  };
  //   logger.warn('createErrorHTTP', JSON.stringify(response));
  return response;
};

/**
 * some const strings
 */

// 400
const MISSING_QUERY_PARAMETERS = 'Missing query parameter(s)';
const MIGGING_PATH_PARAMETERS = 'Missing path parameter(s)';
const MIGGING_PARAMETER = 'Missing parameter';
const MISSING_BODY = 'Missing request body';
const JSON_BODY_ERROR = "Couldn't read JSON Body";
const BAD_PARAMETER = 'Bad parameter(s)';

// -/

// 401
const UNAUTHORIZED = 'Unauthorized';
// 403
const FORBIDDEN = 'Forbidden request';
// 404
const NOT_FOUND = 'Not found';
// 405
const METHOD_NOT_ALLOWED = 'Method Not Allowed';

// 500
const INTERNAL_SERVER_ERROR = 'Internal Server Error';

module.exports = {
  createSuccessHTTP,
  createErrorHTTP,
  MISSING_QUERY_PARAMETERS,
  MIGGING_PATH_PARAMETERS,
  MIGGING_PARAMETER,
  MISSING_BODY,
  JSON_BODY_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  INTERNAL_SERVER_ERROR,
  BAD_PARAMETER,
};
