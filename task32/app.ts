let current_users: string[] = ['abdul','amjad','Kashif','Jameel','osama']
let new_users: string[] = ['ahmed','amjad','kashif','Bilal','zaid']

let current_users1 = current_users.map((val)=>{
    return val.toLowerCase();
})

new_users.map((user)=>{
    if(current_users1.indexOf(user.toLowerCase()) !== -1){
        console.log(`${user} will need to enter a new username.`);
    }else{
        console.log(`${user} username is available.`);
    }
})