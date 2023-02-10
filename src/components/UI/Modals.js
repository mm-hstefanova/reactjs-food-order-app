import classes from './Modals.module.css';
import Card from './Card';
import Cart from '../Cart/Cart';

import { createPortal } from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('modal');

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}

      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
