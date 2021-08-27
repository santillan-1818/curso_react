
import React, { useState } from 'react';
import "./index.css";
import AddCategory from "./AddCategory";
import GifsGrid from './GifsGrid';

const GifFinderApp = () => {
    const [categorias, setCategorias] = useState(["One Punch", "Marvel", "DC"]);
    
 
    // const handleAddCategory = () => {
    //     setCategorias([...categorias,"Thor"]);
        
    // }

    return (
        <>
            <h1>Gif Finder App</h1>
            <hr />
            {/*{categorias}*/}
           {/* <ol>
                <li>One Punch</li>
                <li>Marvel</li>
                <li>Dc</li>
                
           </ol>*/}
            {/* <button onClick={handleAddCategory}>Agregar</button> */}
            <AddCategory setCategorias={setCategorias}
            categorias={categorias} />
               {categorias.map((categoria) => {
                   return <GifsGrid key={categoria} categoria={categoria} />;
               })}
         
        </>
    )
}

export default GifFinderApp
