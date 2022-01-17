import React, { useState } from 'react';
import '../scss/layout/Header.scss';

/* Logo */
import logo from '../assets/logo.png';

/* Context */
import { useSettings } from '../contexts/SettingsContext';

/* Components */
import Modal from '../components/Modal';
import SettingsMenu from '../components/SettingsMenu';

function Header() {
    const { spanish } = useSettings();

    /* Modal */
    const [openModal, setOpenModal] = useState(false);

    function showHeaderModal() {
        setOpenModal(true);
        document.body.classList.add('no-scroll');
    }
    function hideHeaderModal() {
        setOpenModal(false);
        document.body.classList.remove('no-scroll');
    }

    /* Load Settings */
    
    /* Save Settings */

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
                    onClick={showHeaderModal}
                >
                    <span className="icon clog-icon"></span>
                </button>

                {openModal && (
                    <Modal>
                        <SettingsMenu 
                            hideHeaderModal={hideHeaderModal}
                        />
                    </Modal>
                )}
            </div>
        </header>
    )
}

export default Header;