import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import CartPage from './pages/Cart';
import { GlobalStyle } from './styles/global';
import SearchContext from './contexts/SearchContext';
import CartContext from './contexts/CartContext';
import { ToastContainer  } from 'react-toastify';
import CartChangeContext from './contexts/CartTotalContext';



export function App() {
  const [keywordsSearch, setKeywordsSearch] = useState<any>('');
  const [cart, setCart] = useState<any>([]);
  const [cartChange, setcartChange] = useState<any>([]);

  return (
    <>
    <SearchContext.Provider value={[keywordsSearch, setKeywordsSearch]}>
    <CartContext.Provider value={[cart, setCart]}>
      <CartChangeContext.Provider value={[cartChange, setcartChange]}>
        <Route 
          exact 
          path="/"
          component={Home}
        />

        <Route 
          exact 
          path="/Carrinho" 
          component={CartPage}
        />

        <Route 
          exact 
          path="/Login"    
          component={Login}
        />

        <Route 
          exact 
          path="/Checkout" 
          component={Checkout}
        />

<ToastContainer />
    <GlobalStyle/>
    </CartChangeContext.Provider>
    </CartContext.Provider>
    </SearchContext.Provider>
    </>
  );
}