// import React, { useState, useEffect } from 'react'
import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( {category} ) => {

    //const initialState = [];
    //const [images, setImages] = useState(initialState)

    // Se le envía como 2do. argumento un array de dependencias. Solo se ejecutará dependiendo de otro
    // componente. Si indica [] quiere decir que se ejecutará una sola vez.
    // useEffect( () => {
    //     getGifs( category )
    //         // .then( imgs => setImages(imgs));
    //         .then( setImages ); // Como recibe un solo argumento se puede simplificar a esta expresión.
    // }, [ category ]) // Se indica aquí category por si cambia para que vuelva a ejecutar este código.

    // Vamos a hacer un Custum Hook para que ejecute una petición fetch y me indique cuando inició la
    // carga y cuando terminó la carga...

    // ************************************
    // Uso del Custom Hook 
    // ************************************
    const { data:images, loading } = useFetchGifs( category );

    // console.log(state);
    // console.log(data);
    // console.log(loading);

    
    return (
        <>
            <h3 className="card animate__animated animate__fadeIn"> { category } </h3>
            {/* { loading ? 'Cargando...' : 'Carga finalizada'} */}
            { loading && <p className="card animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                {
                        images.map( img => 
                            <GifGridItem 
                                key = { img.id }
                                { ...img }
                                //img = { img } 
                            />

                        )
                }
            </div>
        </>
    )
}
