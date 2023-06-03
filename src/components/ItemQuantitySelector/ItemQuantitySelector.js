// ItemQuantitySelector.js
import React from 'react';

const ItemQuantitySelector = ({ quantity, onChange }) => {
    const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    onChange(newQuantity);
    };

    return (
        <select value={quantity} onChange={handleQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        
        </select>
    );
};

export default ItemQuantitySelector;