import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One punch','Samurai X','Dragon Ball'];

    const [Categories, setCategories] = useState(['Dragon Ball']);

    /* const handleAdd = () => {
        setCategories( [...Categories,'HunterXHunter'] );
        }
     */

    return (
        <div>
            <h2>Giphy API Consumer with React</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>
            
            <ol>
                {
                    Categories.map( category => (
                        <GifGrid 
                            key =  {category}
                            category = {category} 
                        />
                     ) 
                    )
                }
            </ol>
        </div>
    )
}
