import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Meals from './components/Meals/Meals';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Meals />} />
          <Route path='/menu' element={<AvailableMeals />} />
          {/* You can add more routes here */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
