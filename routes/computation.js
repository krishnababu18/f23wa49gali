var express = require('express');
 
var router = express.Router();
 
var random1 = Math.random() * 10;
 
var random2 = Math.random() * 20;
 
 
var number1 = 0;
 
var number2 = 0;
 
var number3 = 0;
 
 
 
 
router.get('/', function (req, res, next) {
 
 
  number1 = Math.abs(random1);
 
  number2 = Math.acos(random2);
 
  number3 = Math.sin(random1);
 
 
 
 
  res.send(`The Random numbers are ${random1} and ${random2}
 
 
    <br> <br> abs applied to ${random1} is ${number1}
 
 
    <br> <br> acos applied to ${random2} is ${number2}
 
 
    <br> <br> sin applied to ${random1} is ${number3}`);
 
 
});
 

 
module.exports = router;