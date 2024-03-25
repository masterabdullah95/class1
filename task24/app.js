var name1 = 'Abdullah';
var mynum = 50;
var myarr = ['car', 'bike', 'plane'];
// Tests for equality and inequality with strings
console.log(name1 === 'Abdullah');
console.log(name1 !== 'Abdullah');
console.log('-----------------');
// Tests for equality and inequality with strings
console.log(name1.toLowerCase() === 'abdullah');
console.log(name1.toLowerCase() !== 'abdullah');
console.log('-----------------');
/* Numerical tests involving equality and inequality, greater than and less than, greater than
or equal to, and less than or equal to */
console.log(mynum == 50);
console.log(mynum != 50);
console.log(mynum > 40);
console.log(mynum < 40);
console.log(mynum >= 50);
console.log(mynum <= 40);
console.log('-----------------');
// Tests using "and" and "or" operators
console.log((mynum == 50) && (mynum >= 50));
console.log((mynum == 2) || (mynum < 30));
console.log('-----------------');
// Test whether an item is in a array
console.log(myarr.indexOf('car') !== -1);
console.log(myarr.indexOf('train') !== -1);
