let make_shirt = (size = 'lg', msg = 'I love TypeScript') =>{
    if(size == 'lg' || size == 'md'){
        console.log(`Size: ${size}, msg: ${msg}`);
    }else{
        console.log(`Size: ${size}, msg: this is different msg.`);
    }
    
}

make_shirt('lg');
make_shirt('md');
make_shirt('sm');