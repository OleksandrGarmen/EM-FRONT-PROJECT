import './style.css'
import { useState } from 'react'
import {ShoppingCart} from 'lucide-react'

const ModalComponent = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')

  }
    return (
         <>
            <button onClick={toggleModal} className="btn-modal">
                <ShoppingCart />
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h1>
                                Your purchases list
                            </h1>
                    <button className="close-modal" onClick={toggleModal}>
                                    CLOSE
                    </button>
                    </div>
                </div>
      )}
        </>
    )
}

export default ModalComponent