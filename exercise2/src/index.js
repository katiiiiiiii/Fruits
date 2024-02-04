import fruits from './Foods';
import {choice, remove} from './Helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, fruits);
let remain = remaining.length;

console.log(`I'm sorry, we're all out. We have ${remain} left.`);
