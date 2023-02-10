import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Header />

      <main>
        <Meals />
      </main>

      <Cart />
    </>
  );
}

export default App;
