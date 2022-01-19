import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import '../scss/components/NewTodoBtn.scss';

function NewTodoBtn({ toggleTodoModal, spanish }) {
    return (
        <button 
            className="new-todo-btn"
            type="button" 
            onClick={toggleTodoModal}
        >
            {spanish? "¡Creá un nuevo To-Do!" : "Create a new To-Do!"}
        </button>
    );
};

function mapStateToProps(state) {
    return (
        {
            spanish: state.settings.spanish,
        }
    );
};

const mapDispatchToProps = {
    toggleTodoModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoBtn);
