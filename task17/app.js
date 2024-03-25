var persons = ['Kashif', 'Bilal', 'Osama', 'Taha', 'Hamza'];
console.log('I can invite only two people for dinner.');
/* Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner. */
console.log('Hi ' + persons.pop() + ' I want to say sorry but i cant invite you for dinner.');
console.log('Hi ' + persons.pop() + ' I want to say sorry but i cant invite you for dinner.');
console.log('Hi ' + persons.pop() + ' I want to say sorry but i cant invite you for dinner.');
/* Print a message to each of the two people still on your list,
letting them know they’re still invited. */
console.log('Hi ' + persons[0] + ' You are invited for dinner tonight.');
console.log('Hi ' + persons[1] + ' You are invited for dinner tonight.');
/* Remove the last two names from your list, so you have an empty list. Print your list to make sure
you actually have an empty list at the end of your program. */
persons.pop();
persons.pop();
console.log(persons);
