var express = require('express');
var router = express.Router();

const {User} = require("../models/users.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then((users) => {
    res.render("users", { data: users});
  });
});


module.exports = router;
