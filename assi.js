const arr= [2,4,5,6,7,3,5];
console.log("Original Array=>");
console.log(arr);
console.log("")

const cube =arr.map((cube)=> cube**3);
console.log("Array of cube=>");
console.log(cube);
console.log("");

const sq =arr.map((sq)=> sq**2);
console.log("Array of square=>");
console.log(sq);
console.log("");

const add =arr.map((add)=> '1'+add);
console.log("Addition of element=>");
console.log(add);
console.log("");

const mul =arr.map((mul)=> mul * 5);
console.log("multiplication=>");
console.log(mul);
console.log("");

const mul1 =arr.map((mul1)=> mul1 * 10);
console.log("Multiplication=>");
console.log(mul1);
console.log("");


