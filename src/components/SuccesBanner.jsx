import React from 'react';
import { connect } from 'react-redux';
import '../scss/components/SuccessBanner.scss';

function SuccessBanner({ showSuccessBanner, spanish }) {
  return (
    <div 
        className={
            `success-banner
            ${showSuccessBanner? "success-banner--active" : ""}`
        }
        aria-hidden={showSuccessBanner}
    >
        <p
            aria-live="assertive"
        >
            {spanish? "To-do editado éxitosamente" : "To-do successfully edited"}
        </p>
    </div>);
}

function mapStateToProps(state) {
    return {
        spanish: state.settings.spanish,
        showSuccessBanner: state.modals.showSuccessBanner,
    };
};

export default connect(mapStateToProps, null)(SuccessBanner);
