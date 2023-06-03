
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../firebase-config';

// Inicializa la conexión a Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await db.collection('items').get();
        const itemsData = querySnapshot.docs.map((doc) => doc.data());
        setItems(itemsData);
      } catch (error) {
        console.log('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);
  
  return (
    <div>
      <h2>Lista de productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;