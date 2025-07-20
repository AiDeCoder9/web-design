const fruits = ["apple", "mango", "pineapple"];
const seasonalFruits = ["mango", "strawberry", "peach"];
console.log(fruits);
console.log(fruits.length);
fruits.pop();
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits[1] = "watermelon";
console.log(fruits);
const newFruits = fruits.concat(seasonalFruits);
console.log(newFruits);
newFruits.splice(0, 3);
console.log(newFruits);
const joinedArray = [newFruits[0]].concat([newFruits[newFruits.length - 1]]);
console.log(joinedArray);

// Fix this code: let nam = "John" console.log(name)
// Fix this code: function add(a b) { return a + b }
// Fix this code: if (age = 18) { console.log("adult") }
// Fix this code: let colors = ["red", "blue", "green"] console.log(colors[3])
// Fix this code: function greet() { console.log("Hello") } greet
