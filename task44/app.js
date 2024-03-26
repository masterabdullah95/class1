var sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered sandwich with following ingrediants:");
    items.map(function (item) {
        console.log(item);
    });
};
sandwich('chicken');
console.log('----------');
sandwich('tomato', 'potato');
console.log('----------');
sandwich('onion', 'cherry', 'cheeze');
