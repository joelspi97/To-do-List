import React from 'react';
import ReactDOM from 'react-dom';

function HeaderModal(props) {
    return ReactDOM.createPortal (
        <div className="modal-background project-padding">
            {props.children}
        </div>,
        document.getElementById('modal')
    );
}

export { HeaderModal };
