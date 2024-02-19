module.exports = Object.freeze({
  //	API Constants
  API_SUCCESS_CODE: 1,
  API_FAILED_CODE: 0,
  API_SUSPEND_CODE: 3,
  API_SUCCESS_MESSAGE: "Success",
  API_FAILED_MESSAGE: "Failed",
  API_ACCESS_DENIED: "Access denied!",

  //Request Constants
  REQUEST_OK: 200,
  REQUEST_CREATED: 201,
  REQUEST_BAD_REQUEST: 400,
  REQUEST_UNAUTHORIZED: 401,
  REQUEST_FORBIDDEN: 403,
  REQUEST_NOT_FOUND: 404,
  REQUEST_METHOD_NOT_ALLOWED: 405,
  REQUEST_CONFLICT: 409,
  REQUEST_INTERNAL_SERVICE_ERROR: 500,
  REQUEST_SERVICE_UNAVAILABLE: 503,

  //API Record message
  MSG_RECORD_FOUND_SUCCESS: "Record Found!",
  MSG_RECORD_FOUND_FAIL: "Sorry! No record Found!",

  //Status Constants
  OBJECT_STATUS_ENABLED: 1,
  OBJECT_STATUS_DISABLED: 2,
  OBJECT_STATUS_SUSPENDED: 3,
  OBJECT_STATUS_PENDING: 4,
  OBJECT_STATUS_DELETED: 5,
  OBJECT_STATUS_ACTIVE: 6,
  OBJECT_STATUS_COMPLETED: 7,
  OBJECT_STATUS_EXPIRED: 8,
  OBJECT_STATUS_REJECTED: 9,

  //Response Tag API User Constants
  MSG_USER_ADD_SUCCESS: "Signed Up!",
  MSG_USER_LOGIN_SUCCESS: "Logged In!",
  MSG_USER_CHANGE_PASS_SUCCESS: "Password changed!",
  MSG_USER_CHANGE_PASS_SET: "Password Set Successfully!",
  MSG_USER_CHANGE_PASS_WRONG: "Wrong password!",
  MSG_USER_ALREADY_EXIST: "Account already exist!",
  MSG_ACCOUNT_ACTIVATE_SUCCESS: "Account Activated!",
  MSG_ACCOUNT_VERIFY_SUCCESS: "Account Verified!",
  MSG_ACCOUNT_ACTIVATE_FAIL: "Account Activation Failed!",
  MSG_USER_INVALID: "Invalid USER!",
  MSG_USER_INVALID_CREDENTIALS: "Invalid Credentials!",
  MSG_CODE_SEND_SUCCESS: "Verification Code has been sent!",
  MSG_USER_ADD_FAIL: "Sorry! Signup Failed!",
  MSG_INVALID_EMAIL: "Invalid Email!",
  MSG_EMAIL_NOT_FOUND: "Email not found!",
  MSG_INVALID_PHONE_NUMBER: "Invalid phone number!",

  //Table Names
  TBL_USER: "tbl_users",
});
