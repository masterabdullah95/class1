let magicians: string[] = ['Bilal', 'Taha', 'Osama']

let make_great = ()=>{
    magicians1 = magicians.map((val)=>{
        return 'The Great '+ val
    })
    return magicians1;
}
let magicians1 = make_great();

let show_magicians = (magicians)=>{
    magicians.map((name)=>{
        console.log(name);
    })
}
show_magicians(magicians);
show_magicians(magicians1);