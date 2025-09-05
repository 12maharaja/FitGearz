import React from 'react'
import CategoriesCard from './CategoriesCard';
import sport from "../../images/sport.jpeg";
import gym from "../../images/gym.jpeg";
import sup from "../../images/suppliment.jpeg";



function CategoriesList() {
  const categories = [
    { name: "Sports Products", image: sport },
    { name: "Gym Product", image: gym },
    { name: "Supplements", image: sup },
  ];
  
  const categoryitem= categories.map((category,index)=>(
    <CategoriesCard key={index}name={category.name} image={category.image}/>
  ));
  return (<>{categoryitem}</>)
}
 
export default CategoriesList