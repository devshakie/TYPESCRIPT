"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var processCart = function (cart) {
    // Do something with the cart in here
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
});
var processRecipe = function (recipe) {
    // Do something with the recipe in here
};
processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
});
//Tuples
var setRange = function (range) {
    var x = range[0];
    var y = range[1];
};
//optional members of tuples
var goToLocation = function (coordinates) {
    var latitude = coordinates[0];
    var longitude = coordinates[1];
    var elevation = coordinates[2];
};
