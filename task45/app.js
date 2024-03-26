var car;
var make_car = function (manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    car = { manufacturer: manufacturer, model: model, options: options[0] };
};
make_car('suzuki', 'corolla', { color: 'black', engine: '1200', petrol: '40' });
console.log(car);
