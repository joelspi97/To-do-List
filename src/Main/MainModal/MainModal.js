import React from 'react';
import ReactDOM from 'react-dom';

function MainModal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal-background project-padding">
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { MainModal };
