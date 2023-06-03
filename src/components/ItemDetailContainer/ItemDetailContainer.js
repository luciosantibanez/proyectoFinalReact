// ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
    // Fetch item details from Firebase based on the id
    // Update the 'item' state with the fetched data
    }, [id]);

    return (
    <div>
        {item ? (
        <ItemDetail item={item} />
        ) : (
        <p>The product does not exist.</p>
        )}
    </div>
    );
};

export default ItemDetailContainer;