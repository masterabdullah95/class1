let car = 'corolla'
let cars = ['vitz', 'mehran', 'cultus']

/* True Statements */
// it will return true bcz car name is 'corolla'
console.log(car === 'corolla')
// it will return true bcz car name is string type
console.log((typeof car) === 'string')
// it will return true bcz cars array contains 3 elements
console.log(cars.length === 3)
// it will return true bcz first element of cars array is 'vitz'
console.log(cars[0] === 'vitz')
// it will return true bcz first element of cars array is not 'mehran'
console.log(cars[0] !== 'mehran')

console.log('---------------');


/* False Statements */
// it will return false bcz car name is not 'cultus'
console.log(car === 'cultus')
// it will return false bcz car name is not boolean type
console.log((typeof car) === 'boolean')
// it will return false bcz cars array contains 3 elements
console.log(cars.length === 4)
// it will return false bcz first element of cars array is not 'cultus'
console.log(cars[0] === 'cultus')
// it will return false bcz first element of cars array is 'vitz'
console.log(cars[0] === 'mehran')