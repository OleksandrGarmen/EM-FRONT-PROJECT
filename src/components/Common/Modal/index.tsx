import './style.css'
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { ShoppingBasket, X } from 'lucide-react';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <div onClick={toggleModal} className="btn-modal">
        <ShoppingBasket size={40} strokeWidth={1} />
      </div>
      {modal && createPortal(
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="close-modal" onClick={toggleModal}>
              <X />
            </div>
            <ul className='shop-list'>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit minus nam ea error quam magnam perferendis laudantium ut nisi ipsam quidem officiis harum, beatae pariatur, consequatur numquam voluptates provident!</p></li>
            </ul>
          </div>
        </div>,
        document.getElementById('modal-root')!
      )}
    </>
  )
}

export default ModalComponent;
