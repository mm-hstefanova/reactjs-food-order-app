import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/cart-provider';

function App() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <CartProvider>
      <Header onShowModal={onShowModal} />

      <main>
        <Meals />
      </main>

      {showModal && <Cart onCloseModal={onCloseModal} />}
    </CartProvider>
  );
}

export default App;
