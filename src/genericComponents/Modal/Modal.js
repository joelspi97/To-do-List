import React from 'react';
import ReactDOM from 'react-dom';

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
