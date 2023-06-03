// Item.js
import React from 'react';
import Esc from '../Item/assets/escritorio.png'

const Item = ({ item }) => {
    return (
    <div>
        <img src={Esc} alt={item.name} />
        <h3>{item.name}</h3>
        <p>${item.price}</p>

    </div>
    );
};

export default Item;