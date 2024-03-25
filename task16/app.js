var persons = ['Kashif', 'Bilal', 'Osama'];
console.log('Hi ' + persons[0] + '! I found a bigger dinner table.');
console.log('Hi ' + persons[1] + '! I found a bigger dinner table.');
console.log('Hi ' + persons[2] + '! I found a bigger dinner table.');
// Add element to start of the array
persons.unshift('Taha');
// Add element to the middle of the array
persons.splice(2, 0, 'Basit');
// Add element to the end of the array
persons.push('Rizwan');
console.log('Hi ' + persons[0] + '! I want to invite you for dinner tonight.');
console.log('Hi ' + persons[1] + '! I want to invite you for dinner tonight.');
console.log('Hi ' + persons[2] + '! I want to invite you for dinner tonight.');
console.log('Hi ' + persons[3] + '! I want to invite you for dinner tonight.');
console.log('Hi ' + persons[4] + '! I want to invite you for dinner tonight.');
