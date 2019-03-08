// import validator from 'validator';
var validator = require('validator');



let text = 'foo@bar.com';
let result = validator.isEmail(text);

console.log(text, 'is', result);
// console.log('text is', text);