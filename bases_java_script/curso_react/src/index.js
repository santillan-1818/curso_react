const saludar = function (nombre){
    return `Hola ${nombre}`;
};
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => ( `Hola ${nombre}`);

console.log(saludar("Ángel"));
console.log(saludar2("Santillán"));
console.log(saludar3("Santillán"));