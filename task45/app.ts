let car;

let make_car = (manufacturer, model, ...options )=>{
    car = {manufacturer, model, options: options[0]}
}

make_car('suzuki', 'corolla', {color:'black', engine: '1200', petrol: '40'});

console.log(car);