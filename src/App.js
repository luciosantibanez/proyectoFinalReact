
import React, { useEffect, useState } from 'react';
import {getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



const App = () => {
  const[categoria, setCategoria] = useState()

  // useEffect(() => {
  //   const db=getFirestore();
  
  //   const categoryRef = doc(db, 'Item','v7Vy6IjcYnN71M64g7tv');
  //   getDoc(categoryRef).then((snapshot) =>{
  //         if(snapshot.exists()){
  //           setCategoria({id:snapshot.id,...snapshot.data()});
        
  //     }
  //   });
  // }, []);

  // console.log(categoria)

  useEffect(()=>{
    const db=getFirestore();
    const categoriaCollection=collection(db,'categorias')
    getDocs(categoriaCollection).then((snapshots)=>{
      if (snapshots){
        setCategoria(
          snapshots.doc.map((doc)=>({id: doc.id, ...doc.data() }))
          
        );
      }
    });
  },[]);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/categories/:categoryId" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;