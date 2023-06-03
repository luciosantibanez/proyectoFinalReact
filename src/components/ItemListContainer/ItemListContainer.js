// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  
  return (
    <div>
      <h2>Product List      </h2>
      <ItemList/>
    </div>
  );
};

export default ItemListContainer;