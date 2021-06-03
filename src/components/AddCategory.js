import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); //Esta línea previene el refresh automático de los form

        if(inputValue.trim().length>2){
            setCategories( category => [inputValue , ...category] );
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Introduce el tema a buscar y pulsa Enter"
                value = {inputValue}
                onChange = { handleInputChange }
            />
        </form>
    )
}

//Utilizamos proptypes para que sea obligatorio mandar la función
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}