// import Inputmask from "../node_modules/inputmask/dist/inputmask/inputmask.es6.js";
// var Inputmask = require('inputmask');
// import Inputmask from "../../node_modules/inputmask/dist/inputmask/inputmask.es6.js";
// import Inputmask from "../inputmask/inputmask.es6.js";
import Inputmask from "../inputmask/inputmask.es6.js";
let field = document.querySelectorAll('input[name="phone"]');
Inputmask("+ (380) 99-999-99-99").mask(field);