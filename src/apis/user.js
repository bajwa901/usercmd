let common = require("../apis/common/commonFunctions");
let constants = require("../apis/common/constants");
let userService = require("./services/user/userService");

let simpleLogin = (req, res) => {
  var missingParam;
  if (common.isEmpty(req.body.user_name)) {
    missingParam = "Email  missing!";
  } else if (common.isEmpty(req.body.password)) {
    missingParam = "Password Missing!";
  }
  if (missingParam) {
    common.sendResponse(
      res,
      constants.REQUEST_OK,
      constants.API_FAILED_CODE,
      missingParam
    );
  } else {
    if (!common.isValidEmail(req.body.user_name)) {
      common.sendResponse(
        res,
        constants.REQUEST_OK,
        constants.API_FAILED_CODE,
        constants.MSG_INVALID_EMAIL
      );
    } else {
      // now we need to check if the email exists in database
      userService
        .checkIfEmailExists(req.body.user_name)
        .then((data) => {
          if (data && data.length > 0) {
            //now check for password
            userService
              .validPassword(data.user_id, req.body.password)
              .then((data) => {
                if (data) {
                  common.sendResponse(
                    res,
                    constants.REQUEST_OK,
                    constants.API_FAILED_CODE,
                    constants.MSG_USER_LOGIN_SUCCESS
                  );
                } else {
                  common.sendResponse(
                    res,
                    constants.REQUEST_OK,
                    constants.API_FAILED_CODE,
                    constants.MSG_USER_INVALID_CREDENTIALS
                  );
                }
              });
          } else {
            common.sendResponse(
              res,
              constants.REQUEST_OK,
              constants.API_FAILED_CODE,
              constants.MSG_EMAIL_NOT_FOUND
            );
          }
        })
        .catch((err) => {
          common.sendResponse(
            res,
            constants.REQUEST_OK,
            constants.API_FAILED_CODE,
            err
          );
        });
    }
  }
};

let simpleSignUp = (req, res) => {
  var missingParam;
  if (common.isEmpty(req.body.first_name)) {
    missingParam = "First name  missing!";
  } else if (common.isEmpty(req.body.last_name)) {
    missingParam = "Last name  missing!";
  } else if (common.isEmpty(req.body.password)) {
    missingParam = "Password missing!";
  } else if (common.isEmpty(req.body.email)) {
    missingParam = "Email  missing!";
  }
  if (missingParam) {
    common.sendResponse(
      res,
      constants.REQUEST_OK,
      constants.API_FAILED_CODE,
      missingParam
    );
  } else if (!common.isValidEmail(req.body.email)) {
    common.sendResponse(
      res,
      constants.REQUEST_OK,
      constants.API_FAILED_CODE,
      constants.MSG_INVALID_EMAIL
    );
  } else {
    //first check if email exists or not
    userService
      .checkIfEmailExists(req.body.email)
      .then((data) => {
        if (!data) {
          // will proceed to singUp
          let userObject = new Object();
          userObject.first_name = req.body.first_name;
          userObject.last_name = req.body.last_name;
          userObject.user_password = req.body.password;
          userObject.user_email = req.body.email;
          if (req.body.address) {
            userObject.user_address = req.body.address;
          } else {
            userObject.user_address = "Test address";
          }
          if (req.body.phone_number) {
            //check if phoneNumber is valid
            if (common.isValidPhone(req.body.phone_number).length > 0) {
              userObject.user_contact = req.body.phone_number;
            } else {
              common.sendResponse(
                res,
                constants.REQUEST_OK,
                constants.API_FAILED_CODE,
                constants.MSG_INVALID_PHONE_NUMBER
              );
            }
          } else {
            userObject.user_contact = "12345";
          }
          if (req.body.user_type) {
            userObject.user_type = req.body.user_type;
          } else {
            userObject.user_type = "1";
          }
          userObject.user_status = "1";
          userService
            .signUpProcess(userObject)
            .then((data) => {
              if (data) {
                common.sendResponse(
                  res,
                  constants.REQUEST_OK,
                  constants.API_SUCCESS_CODE,
                  constants.MSG_USER_ADD_SUCCESS
                );
              } else {
                common.sendResponse(
                  res,
                  constants.REQUEST_OK,
                  constants.API_SUCCESS_CODE,
                  constants.MSG_USER_ADD_FAIL
                );
              }
            })
            .catch((err) => {
              common.sendResponse(
                res,
                constants.REQUEST_OK,
                constants.API_FAILED_CODE,
                err
              );
            });
        } else {
          common.sendResponse(
            res,
            constants.REQUEST_OK,
            constants.API_FAILED_CODE,
            constants.MSG_USER_ALREADY_EXIST
          );
        }
      })
      .catch((err) => {
        common.sendResponse(
          res,
          constants.REQUEST_OK,
          constants.API_FAILED_CODE,
          err
        );
      });
  }
};

module.exports = {
  simpleLogin,
  simpleSignUp,
};
