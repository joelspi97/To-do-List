import React from 'react';

/* Logo */
import logo from '../images/logo.png';

/* Context */
import { useSettings } from '../SettingsContext/SettingsContext';

/* Components */
import { HeaderModal } from './HeaderModal/HeaderModal';
import { SettingsMenu } from './HeaderModal/SettingsMenu/SettingsMenu';

function Header() {
    const {
        animations,
        highContrast,
        spanish,
        darkTheme,} = useSettings();

    /* Modal */
    const [openModal, setOpenModal] = React.useState(false);

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
                    <HeaderModal>
                        <SettingsMenu 
                            hideHeaderModal={hideHeaderModal}
                        />
                    </HeaderModal>
                )}
            </div>
        </header>
    )
}

export { Header };