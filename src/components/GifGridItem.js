import React from 'react'

//export const GifGridItem = ( props ) => {
export const GifGridItem = ( { id, title, url } ) => {

    //console.log( props );
    //console.log( 'id:', id, 'title: ', title, 'url: ', url );

    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ title }></img>
            <p> { title } </p>
        </div>
    )
}
