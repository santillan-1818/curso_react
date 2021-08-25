var variableVar= "VAR fuera del if";

let variableLet = "LET fuera del if";
const constante = "Santillán";

if(true) {
    const constante = "Ángel";
    var variableVar = "VAR dentro del if";
    let variableLet = "LET dentro del if";
    console.log(variableLet);
    console.log(constante);
}



console.log(variableVar);
console.log(variableLet);
console.log(constante);