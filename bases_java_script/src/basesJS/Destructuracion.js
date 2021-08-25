//Desestructuración

const persona = {
    nombre: "ángel",
    apellidos:  "glez. santillan",
    email: "angel.gqtuxtepec.tecnm.mx"
}

//Spread
// const persona2 = {...persona};

// console.log ("P1", persona, nombre);
// console.log ("P2", persona2, nombre);

//Desestructuración de arreglos

const personajes = ['goku','Vegeta','Trunks','Bulma'];

const [, , personaje3] = personajes;

const caracteres = personajes;
 caracteres[3] = "Gohan";
 

console.log({personajes});
console.log({caracteres});


console.log(personaje3);



console.log(personajes[0]);

console.log(personajes[1]);

console.log(personajes[2]);

console.log(personajes[3]);







