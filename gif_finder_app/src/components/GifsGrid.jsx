
import React, { Fragment, useEffect, useState } from 'react';
import GifsGridItems from './GifsGridItems';

const GifsGrid = ({ categoria}) => {
    const [imagenes, SetImagenes] = useState([]);
useEffect(() => {
    getGifs();
}, []);

const getGifs = async() => {
    const api_key="QsFJNsyqxH79Ao7FdTEVWq0bshGTkm1G"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
    
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    
    SetImagenes(gifs);
}

    return (
        <>
        <h3>{categoria}</h3>
        <div className="card-grid">

                {imagenes.map((imagen) => {
                return <GifsGridItems key={imagen.id} imagen={imagen} />
            })}
        </div>
        </>
    );
};

export default GifsGrid;
