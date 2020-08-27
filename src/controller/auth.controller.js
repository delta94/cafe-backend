const formResponse = require("../helpers/form/responseForm");
const authModel = require("../model/auth.model");

const authController = {
  register: (req, res) => {
    authModel
      .register(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  login: (req, res) => {
    console.log(req.body);
    authModel
      .login(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  userData: (req, res) => {
    console.log(req.body);
    authModel
      .userData(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
};

module.exports = authController;
