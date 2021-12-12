import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List/List';
import BascetPage from './components/pages/Bascet/BascetPage';
import Navigation from './components/common/Navigation';
import { useState, useEffect } from 'react';
import { state } from "./state"

function App() {

  const [productsList, setProductsList] = useState(state)
  const [selectedProducts, setSelectedProducts] = useState([])

  const addItem = (data) => {
    const products = [...selectedProducts];
    let condition = false;

    setProductsList(prevState => prevState.map(el =>
      el.id === data.id ? { ...el, inStock: true, count: 1, allPrice: el.price } : el))

    products.map(el => el.id === data.id ? condition = true : false);
    condition ? products.push(null) : products.push(data);
    setSelectedProducts(products)
  };

  const deleteItem = id => {
    setProductsList(prevState => prevState.map(el => el.id === id ? { ...el, inStock: false } : el))
    setSelectedProducts(prevState => prevState.filter(el => id !== el.id))
  }

  const itemAction = (id, type) => {
    selectedProducts.map((el) => {
      if (id === el.id && type === 'increment') {
        el.count++;
        countItemPrice(id, "+")
      }
      if (id === el.id && type === 'decrement') {
        el.count--;
        countItemPrice(id, '-')
      }
    })
  }

  const countItemPrice = (id, math) => {
    const modifier = (math === '+' ? 1 : -1);
    const products = [...selectedProducts];
    products.map((el) => {
      if (el.id === id && el.discount && el.count % el.discountFromKg === 0) {
        el.allPrice = el.allPrice * modifier + el.discount
      }
      else if (el.id === id) {
        el.allPrice = el.allPrice + el.price * modifier
      }
    })
    setSelectedProducts(products)
  }

  return (
    <Router>
      <div className="container">
        <div className="container__menu">
          <Navigation />
        </div>
        <Routes>
          <Route path="FrutList/" element={<List data={productsList} addItem={addItem} />} />
          <Route path="FrutList/bascet" element={<BascetPage list={selectedProducts} deleteItem={deleteItem} itemAction={itemAction}
          />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
