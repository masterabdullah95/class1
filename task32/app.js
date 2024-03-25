var current_users = ['abdul', 'amjad', 'Kashif', 'Jameel', 'osama'];
var new_users = ['ahmed', 'amjad', 'kashif', 'Bilal', 'zaid'];
var current_users1 = current_users.map(function (val) {
    return val.toLowerCase();
});
new_users.map(function (user) {
    if (current_users1.indexOf(user.toLowerCase()) !== -1) {
        console.log("".concat(user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(user, " username is available."));
    }
});
