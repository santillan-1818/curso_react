import { heroes } from "../data/herores";

//Map permite recorrer el conyenido del arreglo hacer algo y devolver creando un arreglo
//Callback es una función dentro de otra función

// const nuevo = heroes.map((item) => {

// return {...item, version: 1};
// });

// Filter

// const nuevo = heroes.filter((item) => {
//     return item.name==="ARAÑA";
// });

// Find

const nuevo = heroes.find((item) => {
    return item.name ==="ARAÑA";
});


console.log({heroes});
console.log({nuevo});