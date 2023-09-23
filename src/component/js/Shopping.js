import React, { useState } from 'react';
import data from './data.json';

import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../css/Shop.css';
import '../css/Menu.css';
import CartSummary from './Cheakout';

function Menu() {
  const [cart, setCart] = useState({});
  const [showCartSummary, setShowCartSummary] = useState(false);

  const importAllImages = (r) => {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
  };

  const images = importAllImages(require.context('../img', false, /\.(jpeg|jpg|png)$/));

  const addToCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemId]) {
        updatedCart[itemId].quantity += 1;
      } else {
        updatedCart[itemId] = { ...data.find(item => item.id === itemId), quantity: 1 };
      }
      return updatedCart;
    });
  };

  const cancelCart = () => {
    setCart({});
    setShowCartSummary(false);
  };

  const totalPrice = Object.values(cart).reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div><BiShoppingBag className='logo' /></div>
          <div className="brand">Shopping Hub</div>
        </div>

        <div className="cart-icon" onClick={() => setShowCartSummary(true)}>
          <AiOutlineShoppingCart size={30} />
          <span className="cart-quantity">{Object.values(cart).reduce((total, item) => total + item.quantity, 0)}</span>
        </div>
      </nav>

      <div className="menu-container">
        <div className="menu">
          {data.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={images[`./${item.image}`].default} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="buttons">
                <button onClick={() => addToCart(item.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCartSummary && (
        <div className="cart-summary-modal">
          <div className="cart-summary-content">
            <CartSummary
              cart={cart}
              totalPrice={totalPrice}
              cancelCart={cancelCart}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
