const objnames = [
    {fname:"Ayushman",lname:"Khurana"},
    {fname:"Sunny",lname:"Deol"},
    {fname:"Rajkumar",lname:"Roa"},
    {fname:"Annu",lname:"Kapoor"},
    {fname:"Ajit",lname:"Khan"},
]
const name =objnames.map((item)=> `${item.fname} ${item.lname}`);
console.log(name);

const add=objnames.map((item)=> `Mr ${item.fname} ${item.lname}`);
console.log(add);

const add1=objnames.map((item)=> `Mr ${item.fname} ${item.lname} sir`);
console.log(add1);