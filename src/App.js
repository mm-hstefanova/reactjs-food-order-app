import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Header onShowModal={onShowModal} />

      <main>
        <Meals />
      </main>

      {showModal && <Cart onCloseModal={onCloseModal} />}
    </>
  );
}

export default App;
