import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import '../scss/components/Modal.scss';

function Modal({ children, spanish }) {
    return ReactDOM.createPortal(
        <div className="project-padding">
            <span className="visually-hidden" aria-live="assertive">{spanish? "Menú abierto." : "Open menu."}</span>
            { children }
        </div>,
        document.getElementById('modal')
    );
};

function mapStateToProps(state) {
    return (
        {
            spanish: state.settings.spanish,
        }
    );
};

export default connect(mapStateToProps, null)(Modal);
