let sandwich = (...items)=>{
    console.log("You have ordered sandwich with following ingrediants:");
    items.map((item)=>{
        console.log(item);
    })
}

sandwich('chicken');
console.log('----------');
sandwich('tomato', 'potato');
console.log('----------');
sandwich('onion','cherry','cheeze');