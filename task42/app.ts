let magicians: string[] = ['Bilal', 'Taha', 'Osama']

let make_great = ()=>{
    magicians = magicians.map((val)=>{
        return 'The Great '+ val
    })
}
make_great();
let show_magicians = ()=>{
    magicians.map((name)=>{
        console.log(name);
    })
}
show_magicians();