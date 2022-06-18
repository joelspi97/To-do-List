import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleHeaderModal } from '../actions/modalActions';
import { toggleHighContrast, toggleAnimations, toggleSpanish, toggleDarkTheme } from '../actions/settingsActions';
import closeModal from './helpers/closeModal';
import SwitchBtn from '../components/SwitchBtn';
import '../scss/components/SettingsMenu.scss';

function SettingsMenu(props) {
    const { toggleHeaderModal,
            toggleHighContrast,
            toggleAnimations,
            toggleSpanish,
            toggleDarkTheme, 
            highContrast, 
            animations,
            spanish,
            darkTheme, } = props;

    function handleCloseModal() {
        closeModal(animations, toggleHeaderModal);
    };

    function handleEscKey(e) {
        if(e.key === 'Escape') {
            e.preventDefault();
            handleCloseModal();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [])

    return (
        <form 
            className="settings modal-content"
            onSubmit={(submitEvent) => submitEvent.preventDefault()}
        >
            <button 
                aria-label={spanish? "Cerrar menu" : "Close menu"}
                type="buttton"
                className="modal-content__close-btn" 
                onClick={handleCloseModal}
            >
                <span className="icon x-icon"></span>
            </button>
            <h2>
                {spanish? "Opciones de accesibilidad" : "Accesibility options"}
            </h2>

            <SwitchBtn
                optionName={spanish? "Animaciones" : "Animations"}
                optionNameId="animations-mode"
                accessibleDescription={spanish? "Marcar para encender, desmarcar para apagar." : "Check to enable, uncheck to disable."}
                leftTag={spanish? "Desactivar" : "Disable"}
                inputId={"animations"} 
                rightTag={spanish? "Activar" : "Enable"} 
                defaultCheck={animations && "checked"}
                handleChange={toggleAnimations}
            />

            <SwitchBtn
                optionName={spanish? "Idioma" : "Language"}
                optionNameId="language-mode"
                accessibleDescription={spanish? "Marcar para español, desmarcar para inglés." : "Check to select Spanish, uncheck to select English."}
                leftTag={"ENG"}
                inputId={"spanish"} 
                rightTag={"ESP"} 
                defaultCheck={spanish && "checked"}
                handleChange={toggleSpanish}
            />
            
            <SwitchBtn
                optionName={spanish? "Tema" : "Theme"}
                optionNameId="theme-mode"
                accessibleDescription={spanish? "Marcar para tema oscuro, desmarcar para tema claro." : "Check to enable dark mode, uncheck to enable light mode."}
                leftTag={spanish? "Claro" : "Light"}
                inputId={"theme"} 
                rightTag={spanish? "Oscuro" : "Dark"} 
                defaultCheck={darkTheme && "checked"}
                handleChange={toggleDarkTheme}
            />

            <SwitchBtn
                optionName={spanish? "Modo de alto contraste" : "High contrast mode"}
                optionNameId="high-contrast-mode"
                accessibleDescription={spanish? "Marcar para encender, desmarcar para apagar." : "Check to enable, uncheck to disable."}
                leftTag={spanish? "Apagado" : "Off"}
                inputId={"high-contrast"} 
                rightTag={spanish? "Prendido" : "On"} 
                defaultCheck={highContrast && "checked"}
                handleChange={toggleHighContrast}
            />

            <div className="modal-content__bottom-btns">
                <button 
                    type="button"
                    className="fill-btn"
                    onClick={handleCloseModal}
                    aria-label={spanish? "Aceptar y cerrar menú" : "Continue and close menu"}
                >
                    {spanish? "Aceptar" : "Continue"}
                </button>
            </div>
        </form>
    );
};

function mapStateToProps(state) {
    return (
        {
            highContrast: state.settings.highContrast,
            animations: state.settings.animations,
            spanish: state.settings.spanish,
            darkTheme: state.settings.darkTheme,
        }
    );
}; 

const mapDispatchToProps = {
    toggleHeaderModal,
    toggleHighContrast,
    toggleAnimations,
    toggleSpanish,
    toggleDarkTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);
