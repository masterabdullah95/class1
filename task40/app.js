var make_album = function (name, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    if (tracks == 0) {
        return {
            name: name,
            title: title
        };
    }
    else {
        return {
            name: name,
            title: title,
            tracks: tracks
        };
    }
};
var album1 = make_album('abdul', 'nature');
var album2 = make_album('bilal', 'forest');
var album3 = make_album('hamza', 'ground', 3);
console.log(album1);
console.log(album2);
console.log(album3);
