let ph = require("phone");
let validator = require("email-validator");
let token = require("random-token");

let sendResponse = function (
  res,
  HTTPResCode,
  responseCode,
  message,
  data = ""
) {
  res.setHeader("Content-Type", "application/json");
  if (isEmpty(data) || data.length <= 0) data = {};
  let response = [];
  response.push({ code: responseCode, message: message, data: data });
  res
    .status(HTTPResCode)
    .send(
      JSON.stringify(response).substr(1, JSON.stringify(response).length - 2)
    );
};

let generateToken = (length = 16) => {
  return token(length);
};

let isEmpty = function (data) {
  if (data == undefined || data == null || data == "" || data.length <= 0) {
    return true;
  } else {
    return false;
  }
};

let isValidEmail = (email) => {
  return validator.validate(email);
};

let isValidPhone = (phone) => {
  return ph(phone);
};

module.exports = {
  sendResponse,
  generateToken,
  isEmpty,
  isValidEmail,
  isValidPhone,
};
