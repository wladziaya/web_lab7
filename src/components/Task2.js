import React from 'react';
import GoodsCard from './GoodsCard';

const Task2 = (props) => {
    return (
        <main>
            {props.items.map((item)=> <GoodsCard key={item.id} good={item}/>)}
        </main>
    );
}

export default Task2;