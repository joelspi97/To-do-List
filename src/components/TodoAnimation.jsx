import React from 'react';
import { connect } from 'react-redux';
import todoCheckIcon from '../assets/todo-check-icon.png';
import '../scss/components/NewTodoAnimation.scss';

function NewTodoAnimation({ spanish }) {
    return (
        <div className="new-todo-animation modal-content">
            <img 
                src={todoCheckIcon} 
                alt="" 
            />
            <p 
                aria-live="assertive" // Revisar que esto funcione bien
            >
                {spanish? "¡Tu nuevo To-do se creado éxitosamente!" : "Your new To-do was successfully created!"}
            </p>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        spanish: state.settings.spanish,
    }
};

export default connect(mapStateToProps, null)(NewTodoAnimation);
