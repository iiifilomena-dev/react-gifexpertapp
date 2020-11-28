import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const initialState = '';
    const [inputValue, setInputValue] = useState(initialState);

    const handleInputChange = ( e ) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue !== undefined && inputValue.trim().length > 0)
        {
            setCategories( cats => [inputValue, ...cats]);
        }
        //console.log('Submit hecho: ', setCategories);
    }

    return (
        // <>
        <form onSubmit = { handleSubmit }>
            {/* <h1> { inputValue } </h1> */}
            <input
                type="text" 
                value={ inputValue }
                // onChange = { (e) => { console.log(e); }}
                onChange = { handleInputChange }
            ></input>
        </form>
        // </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory;
