let make_album = (name, title, tracks = 0)=>{
    if (tracks == 0) {
        return {
            name, title
        }
    }else{
        return {
            name, title, tracks
        }
    }
}

let album1 = make_album('abdul', 'nature');
let album2 = make_album('bilal', 'forest');
let album3 = make_album('hamza', 'ground', 3);

console.log(album1);
console.log(album2);
console.log(album3);