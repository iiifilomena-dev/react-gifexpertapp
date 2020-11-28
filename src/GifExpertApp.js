import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['Steve Jobs']);

    //console.log('GifExpertApps.categories', categories);
    //console.log('GifExpertApps.categories', setCategories);

    // const handleAdd = () => {
    //     //setCategories( (category) => categories.push('iiifilomena') );
    //     //categories.push('iiifilomena'); // No hacer esto, está mal.
    //     //setCategories( [ categories[0], categories[1], categories[2], 'iiifilomena'] );
    //     //setCategories( [...categories, 'iiifilomena'] );
    //     // setCategories( cats => {
    //     //     return [...categories, 'iiifilomena']; 
    //     // });
    //     setCategories( cats => [...categories, 'iiifilomena'] );
    //     console.log(categories);
    // }




    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories } />
        <hr />
        {/* <button onClick={ handleAdd }>Agregar</button> */}
        <ol>
            { 
                categories.map( category => 
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                )
            }
        </ol>        
      </>

    )
}

export default GifExpertApp;
  