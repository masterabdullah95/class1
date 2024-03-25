// Store the locations in a array. Make sure the array is not in alphabetical order.
let locations: string[] = ['Russia', 'India', 'Canada', 'America', 'China']

// Print your array in its original order.
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

// Print your array in alphabetical order without modifying the actual list.
let sorted_locations = [...locations].sort();
sorted_locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

// Show that your array is still in its original order by printing it.
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

// Print your array in reverse alphabetical order without changing the order of the original list.
let reverse_sorted_locations = [...locations].sort();
reverse_sorted_locations.reverse().map((element)=>{
    console.log(element);
});
console.log('---------------------');

// Show that your array is still in its original order by printing it.
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

// Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

/* Sort your array so it’s stored in alphabetical order. Print the array to show that its order has 
been changed. */
locations.sort();
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');

/* Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
 its order has changed. */
locations.sort().reverse();
locations.map((element)=>{
    console.log(element);
});
console.log('---------------------');
