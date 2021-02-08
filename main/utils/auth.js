//aragon2 code here
//function named hashPassword
//return
//module.exports = { hashPassword};
var express = require('express'),
argon2i = require('argon2').argon2i,
crypto = require('crypto'),
bodyParser = require('body-parser');
var app = express();

var jsonParser = bodyParser.json();

const hashPassword = (plainText) => {
  return crypto.randomBytes(32, function(err, salt) {
    if(err) throwerr;

    argon2i.hash(req.body.password, salt).then(hash => {
      console.log(hash); res.sendStatus(201);
    });
})
}


module.exports = { hashPassword };
