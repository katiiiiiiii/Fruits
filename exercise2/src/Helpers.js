function choice(fruits){
    let choice = Math.floor(Math.random() *15);
    return fruits[choice];
}

function remove(fruit, fruits) {
    for (let i = 0; i < fruits.length; i++){
        if (fruits[i] === fruit){
            let remaining = fruits.slice(0,i).concat(fruits.slice(i+1))
            //[...fruits.slice(0, i), ...fruits.slice(i + 1)]
            return remaining
        }
    }
}

export {choice, remove}