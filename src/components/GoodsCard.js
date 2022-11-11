import React from 'react';

const GoodsCard = (props) => {
  return (
    <div className='card'>
        <img src={require(`../img/${props.good.image}`)} alt={props.good.name}/>
        <h2>{props.good.name}</h2>
        <b>{props.good.price} грн</b>
    </div>
  );
}

export default GoodsCard;
