const knex = require("knex");
const knexConfig = require("../../../../knexfile");
var bcrypt = require("bcryptjs");
let common = require("../../common/commonFunctions");
let constants = require("../../common/constants");

var checkIfEmailExists = function (email) {
  return new Promise(function (resolve, reject) {
    let column = "user_email";
    if (!common.isEmpty(email)) {
      const db = knex(knexConfig.development);
      db.select("user_id")
        .from(constants.TBL_USER)
        .where(column, email)
        .then((result) => {
          if (result.length > 0) {
            resolve(result);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          resolve(false);
        })
        .finally(() => {
          db.destroy();
        });
    }
  });
};

var validPassword = function (userId, password) {
  return new Promise(function (resolve, reject) {
    let column = "user_id";
    if (!common.isEmpty(password)) {
      const db = knex(knexConfig.development);
      db.select("user_password")
        .from(constants.TBL_USER)
        .where(column, userId)
        .then((result) => {
          if (result.length > 0) {
            bcrypt.compare(password, result[0].user_password, (err, res) => {
              resolve(res);
            });
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          resolve(false);
        })
        .finally(() => {
          db.destroy();
        });
    }
  });
};

var signUpProcess = function (userObject) {
  return new Promise(async function (resolve, reject) {
    let encryptPass = await encryptPassword(userObject.user_password);
    let userData = {
      first_name: userObject.first_name,
      last_name: userObject.last_name,
      user_password: encryptPass.hash,
      user_email: userObject.user_email,
      user_address: userObject.user_address,
      user_contact: userObject.user_contact,
      user_type: userObject.user_type,
      user_status: userObject.user_status,
    };
    const db = knex(knexConfig.development);
    db(constants.TBL_USER)
      .insert(userData)
      .then((response) => {
        console.log("Data inserted successfully", response);
        if (response) {
          resolve(true);
        }
      })
      .catch((err) => {
        console.error("Error inserting data:", err);
        resolve(false);
      })
      .finally(() => {
        db.destroy();
      });
  });
};

var encryptPassword = async function (thePassword) {
  return new Promise(async function (resolve, reject) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(thePassword, salt, function (err, hash) {
        // Store hash in your password DB.
        let pass = new Object();
        pass.salt = salt;
        pass.hash = hash;
        resolve(pass);
      });
    });
  });
};

module.exports = {
  checkIfEmailExists,
  validPassword,
  signUpProcess,
};
