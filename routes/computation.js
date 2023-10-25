var express = require('express');
 
var router = express.Router();
 
var random1 = Math.random() * 10;
 
var random2 = Math.random() * 20;
 
 
var number1 = 0;
 
var number2 = 0;
 
var number3 = 0;
 
 
 
 
router.get('/', function (req, res, next) {
 
 
  number1 = Math.log2(random1);
 
  number2 = Math.cosh(random2);
 
  number3 = Math.floor(random1);
 
 
 
 
  res.send(`The Random numbers are ${random1} and ${random2}
 
 
    <br> <br> log2 applied to ${random1} is ${number1}
 
 
    <br> <br> cosh applied to ${random2} is ${number2}
 
 
    <br> <br> floor applied to ${random1} is ${number3}`);
 
 
});
 

 
module.exports = router;