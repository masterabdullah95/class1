var magicians = ['Bilal', 'Taha', 'Osama'];
var make_great = function () {
    magicians = magicians.map(function (val) {
        return 'The Great ' + val;
    });
};
make_great();
var show_magicians = function () {
    magicians.map(function (name) {
        console.log(name);
    });
};
show_magicians();
