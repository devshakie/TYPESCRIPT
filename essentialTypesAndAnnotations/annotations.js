"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example5 = exports.example4 = exports.example3 = exports.example2 = exports.example1 = exports.add = void 0;
//Basic Types with Function Parameters
var add = function (a, b) {
    return a + b;
};
exports.add = add;
var result = (0, exports.add)(1, 2);
console.log(result);
//Annotating Empty Parameters
var concatTwoStrings = function (a, b) {
    return [a, b].join(" ");
};
var result2 = concatTwoStrings("Hello", "World");
console.log(result2);
//the basic types
exports.example1 = "Hello World!";
exports.example2 = 42;
exports.example3 = true;
exports.example4 = Symbol();
exports.example5 = 123n;
//the any type
var handleFormData = function (e) {
    e.preventDefault();
    var data = new FormData(e.terget); // e.terget! Whoops!
    var value = Object.fromEntries(data.entries());
    return value;
};
