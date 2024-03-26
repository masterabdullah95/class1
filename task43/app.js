var magicians = ['Bilal', 'Taha', 'Osama'];
var make_great = function () {
    magicians1 = magicians.map(function (val) {
        return 'The Great ' + val;
    });
    return magicians1;
};
var magicians1 = make_great();
var show_magicians = function (magicians) {
    magicians.map(function (name) {
        console.log(name);
    });
};
show_magicians(magicians);
show_magicians(magicians1);
