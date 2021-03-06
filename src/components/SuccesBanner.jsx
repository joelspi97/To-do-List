import React from 'react';
import { connect } from 'react-redux';
import '../scss/components/SuccessBanner.scss';

function SuccessBanner({ showSuccessBanner, newTodoMessage, spanish }) {
  return (
    <div 
        className={
            `success-banner
            ${showSuccessBanner? "success-banner--active" : ""}`
        }
    >
        <p aria-live="assertive">
            {newTodoMessage ? (spanish ? "To-do creado √©xitosamente" : "To-do successfully created") 
                            : (spanish ? "To-do editado √©xitosamente" : "To-do successfully edited")}
        </p>
    </div>);
}

function mapStateToProps(state) {
    return {
        spanish: state.settings.spanish,
        showSuccessBanner: state.modals.showSuccessBanner,
        newTodoMessage: state.modals.newTodoMessage,
    };
};

export default connect(mapStateToProps, null)(SuccessBanner);
