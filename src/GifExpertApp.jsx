import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
//import {AddCategory, GifGrid} from './Components';


const GifExpertApp = () => {

  const [categories, setCategories ] = useState([]);

  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    //  setCategories(['Naruto', ...categories]);
  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory= {(value => onAddCategory(value))}
        currentCategory = {categories}
      />
      
      {
        categories.map(category =>(
          <GifGrid 
          key={category} 
          category={category}/>
        ))
      }
      

    </>
  )
}

export default GifExpertApp;
