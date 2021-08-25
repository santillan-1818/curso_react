const atributo = "apellido";
const persona = {
    nombre: 'Ángel',
    apellido: 'González Santillán',
    edad: 50,
    saludar: function () {
        console.log("Hola a todos");
    },
};

console.log(persona[atributo]);
persona.saludar()