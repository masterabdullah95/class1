var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in a array. Make sure the array is not in alphabetical order.
var locations = ['Russia', 'India', 'Canada', 'America', 'China'];
// Print your array in its original order.
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
// Print your array in alphabetical order without modifying the actual list.
var sorted_locations = __spreadArray([], locations, true).sort();
sorted_locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
// Show that your array is still in its original order by printing it.
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
// Print your array in reverse alphabetical order without changing the order of the original list.
var reverse_sorted_locations = __spreadArray([], locations, true).sort();
reverse_sorted_locations.reverse().map(function (element) {
    console.log(element);
});
console.log('---------------------');
// Show that your array is still in its original order by printing it.
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
// Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
/* Sort your array so it’s stored in alphabetical order. Print the array to show that its order has
been changed. */
locations.sort();
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
/* Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
 its order has changed. */
locations.sort().reverse();
locations.map(function (element) {
    console.log(element);
});
console.log('---------------------');
