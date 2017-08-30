var express = require('express');
var router = express.Router();

const {Employee} = require("../models/employees.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Employee.findAll().then((employees) => {
    res.render("employees", { data: employees});
  });
});


module.exports = router;
