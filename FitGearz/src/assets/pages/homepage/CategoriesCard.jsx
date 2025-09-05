import React from 'react'

function CategoriesCard(props) {
  return (
    <div className="cate-card">
      <h3>{props.name}</h3><br />
      <img src={props.image} alt="" />
    </div>
  );
}

export default CategoriesCard