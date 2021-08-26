import React, {useState} from "react";

const ContadorApp = ({valor}) => {
    const [cuenta, setCuenta] = useState(valor);

    const incrementaCuenta = (e) => {
        
        setCuenta(cuenta + 1);
    };

    const decrementaCuenta = (e) => {
        
        setCuenta(cuenta - 1);
    };

    const reseteaCuenta = (e) => {
        
        setCuenta(valor);
    };
    return (
        <>
            <h1>Contador App</h1>
            <hr />
            <h2>{cuenta}</h2>
            <button onClick={(e) => incrementaCuenta(e)}>+1</button>
            <button onClick={(e) => decrementaCuenta(e)}>-1</button>
            <button onClick={(e) => reseteaCuenta(e)}>Resetea</button>
         </>
  
    );
    };
export default ContadorApp;
