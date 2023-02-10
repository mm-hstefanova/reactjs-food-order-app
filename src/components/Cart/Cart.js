import classes from './Cart.module.css';
import Modal from '../UI/Modals';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: '1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
