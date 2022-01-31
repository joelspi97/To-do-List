import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import openModal from './helpers/openModal';
import '../scss/components/NewTodoBtn.scss';

function NewTodoBtn(props) {
    const { toggleTodoModal, 
            showHeaderModal, 
            showTodoModal, 
            spanish, }= props;

    return (
        <button 
            className="new-todo-btn"
            type="button" 
            onClick={() => openModal(toggleTodoModal)}
            disabled={showHeaderModal || showTodoModal}
        >
            {spanish? "¡Creá un nuevo To-Do!" : "Create a new To-Do!"}
        </button>
    );
};

function mapStateToProps(state) {
    return (
        {
            showHeaderModal: state.modals.showHeaderModal,
            showTodoModal: state.modals.showTodoModal,
            spanish: state.settings.spanish,
        }
    );
};

const mapDispatchToProps = {
    toggleTodoModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoBtn);
