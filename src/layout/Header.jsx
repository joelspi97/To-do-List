import React from 'react';
import { connect } from 'react-redux';
import { toggleHeaderModal } from '../actions/modalActions';
import '../scss/layout/Header.scss';

/* Logo */
import logo from '../assets/logo.png';

/* Context */
import { useSettings } from '../contexts/SettingsContext';

/* Components */
import Modal from '../components/Modal';
import SettingsMenu from '../components/SettingsMenu';

function Header({ showHeaderModal, toggleHeaderModal, }) {
    const { spanish } = useSettings();

    return (
        <header className="header">
            <div className="project-padding header__grid">
                <div className="header__wrapper">
                    <img className="header__logo" src={logo} alt="Logo" />
                    <h1 className="header__heading">To-Do List!</h1>
                </div>

                <button 
                    className="header__settings" 
                    type="button"
                    aria-label={spanish? "Opciones de accesibilidad" : "Accesibility options"}
                    onClick={toggleHeaderModal}
                >
                    <span className="icon clog-icon"></span>
                </button>

                {showHeaderModal && (
                    <Modal>
                        <SettingsMenu />
                    </Modal>
                )}
            </div>
        </header>
    )
}

function mapStateToProps(state) {
    return (
        {
            showHeaderModal: state.showHeaderModal,
        }
    );
};

const mapDispatchToProps = {
    toggleHeaderModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);