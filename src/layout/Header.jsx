import React from 'react';
import { connect } from 'react-redux';
import { toggleHeaderModal } from '../actions/modalActions';
import openModal from '../components/helpers/openModal';
import logo from '../assets/logo.png';
import Modal from '../components/Modal';
import SettingsMenu from '../components/SettingsMenu';
import SuccesBanner from '../components/SuccesBanner';
import '../scss/layout/Header.scss';

function Header(props) {
    const { showHeaderModal, 
            showTodoModal,
            toggleHeaderModal,  
            spanish, } = props;

    return (
        <header className="header">
            <SuccesBanner />

            <div className="project-padding header__grid">
                <div className="header__wrapper">
                    <img className="header__logo" src={logo} alt="Logo" />
                    <h1 className="header__heading">To-Do List!</h1>
                </div>

                <div className="header__setting-wrapper">
                    <button 
                        className="header__settings-button" 
                        id="settings-button"
                        type="button"
                        aria-label={spanish? "Configuración" : "Settings"}
                        onClick={() => openModal(toggleHeaderModal)}
                        disabled={showHeaderModal || showTodoModal}
                    >
                        <span className="icon clog-icon"></span>
                    </button>
                    <label htmlFor="settings-button">{spanish? "Configuración" : "Settings"}</label>
                </div>

                {showHeaderModal && (
                    <Modal>
                        <SettingsMenu />
                    </Modal>
                )}
            </div>
        </header>
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
    toggleHeaderModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);