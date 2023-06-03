// ItemDetail.js
import React, { useState } from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../AddItemButton/AddItemButton';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
    // Add the item to the cart with the selected quantity
    };

    return (
    <div>
        <img src={`/images/${item.id}`} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <ItemQuantitySelector
        quantity={quantity}
        onChange={handleQuantityChange}
        />
        <AddItemButton onClick={handleAddToCart} />
    </div>
    );
};

export default ItemDetail;