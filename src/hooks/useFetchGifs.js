// Cuando empieza con use es un estandar que indica que es un Hook
// Los Hooks no son más que funciones. (En definitiva, objetos en js)

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState(
        {
            data: [],
            loading: true,
        }
    );

    // Se le envía como 2do. argumento un array de dependencias. Solo se ejecutará dependiendo de otro
    // componente. Si indica [] quiere decir que se ejecutará una sola vez.
    useEffect( () => {
        getGifs( category )
            // .then( imgs => setImages(imgs));
            .then( imgs => {
                console.log(imgs);
                setTimeout(() => {
                    setState(
                        {
                            data: imgs,
                            loading: false,
                        }
                    );
                }, 0);
            } ); // Como recibe un solo argumento se puede simplificar a esta expresión.
    }, [ category ]) // Se indica aquí category por si cambia para que vuelva a ejecutar este código.



    // setTimeout(() => {
    //     setstate(
    //         {
    //             data: [1,2,3,4],
    //             loading: false,
    //         }
    //     )
    // }, 3000);

    return state; // El state es el objeto que tiene a { data: [] y a loading: true }
}