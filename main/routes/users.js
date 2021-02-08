var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;


// Configure user account profile edit and list all user
// --------------------------------------------------
router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login');
  }
  const users = req.app.locals.users;
  const _id = ObjectID(req.session.passport.user);

  users.findOne({ _id }, (err, results) => {
    if (err) {
      throw err;
    }

    res.render('account', { ...results });
  });
});


router.post('/', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login');
  }

  const users = req.app.locals.users;
  //like username or update data
  const { username} = req.body;
  const _id = ObjectID(req.session.passport.user);

  users.updateOne({ _id }, { $set: { username} }, (err) => {
    if (err) {
      throw err;
    }

    res.redirect('/users');
  });
});
// --------------------------------------------------

module.exports = router;
