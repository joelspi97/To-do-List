import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/components/Modal.scss';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div 
            id="modal-backdrop"
            className="modal project-padding">
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
