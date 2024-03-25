var usernames = ['editor', 'subscriber', 'admin', 'guest'];
usernames.map(function (element) {
    if (element === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(element, ", thank you for logging in again."));
    }
});
