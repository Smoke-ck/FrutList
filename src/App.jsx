import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List/List';
import BascetPage from './components/pages/Bascet/BascetPage';
import Navigation from './components/common/Navigation';
import { useState, useEffect } from 'react';
import { state } from "./state"

function App() {

  const [productsList, setProductsList] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])

  useEffect(() => {
    setProductsList(state)
  }, [])

  const addItem = (data) => {
    const products = [...selectedProducts];
    const productsInStock = [...productsList]
    let condition = false;

    productsInStock.map(el => el.id === data.id ? [el.inStock= true,el.count = 1,el.allPrice = el.price]: false)
    setProductsList([...productsInStock])

    products.map(el => {
      if (el.id === data.id) {
        condition = true;
      }
    });
    if (condition) {
      products.map(el => {
        if (el.id === data.id) {
          return el;
        }
      });
    } else {
      products.push(data);
    }
    return setSelectedProducts([...products])
  };

  const deleteItem = id => {
    const productsInStock = [...productsList]
    productsInStock.map(el => el.id === id ? el.inStock = false : true)
    setProductsList([...productsInStock])
    setSelectedProducts(prevState => {
      const state = prevState.filter((el) => {
        return id !== el.id && el;
      });
      return state;
    });
  }

  const itemAction = (id, type) => {
    const products = [...selectedProducts]
    products.map((el) => {
      if (id === el.id && type === 'increment') {
        el.count++;
        incrementItemPrice(id)
      }
      if (id === el.id && type === 'decrement') {
        decrementItemPrice(id)
        el.count--;
      }
    });
    return setSelectedProducts([...products])
  }

  const incrementItemPrice = (id) => {
    const products = [...selectedProducts]
    products.map((el) => {
      if (el.id === id && id === 3 && el.count % 3 === 0) {
        el.allPrice = el.allPrice + el.discount
      }
      else if (el.id === id) {
        el.allPrice = el.allPrice + el.price
      }
    })
    return setSelectedProducts([...products])
  }

  const decrementItemPrice = (id) => {
    const products = [...selectedProducts]
    products.map((el) => {
      if (el.id === id && id === 3 && el.count % 3 === 0) {
        el.allPrice = el.allPrice - el.discount
      }
      else if (el.id === id) {
        el.allPrice = el.allPrice - el.price
      }
    })
    return setSelectedProducts([...products])
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
