console.log('  --  arrow function(single line function)  --  ');
const add = (a, b) => a + b;
console.log('  --  arrow function(multible line function)  --  ');
const subtract = (a, b) => {
    const res = a - b;
    return res;
}
console.log(add(1, 5));
console.log(subtract(5, 3));