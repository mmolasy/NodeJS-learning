const add = require("./add");
const divide = require("./divide");
const multiply = require("./multiply");
const substract = require("./substract");

module.exports = {
    add: add,
    substract: substract,
    divide: divide,
    multiply: multiply,
    config: require("./config")
};