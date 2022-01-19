import React from 'react';
import { connect } from 'react-redux';
import { toggleHeaderModal } from '../actions/modalActions';
import { toggleHighContrast, toggleAnimations, toggleSpanish, toggleDarkTheme } from '../actions/settingsActions';
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

    function saveSettings(e) {
        e.preventDefault();
        alert('xd');
    };

    return (
        <form 
            className="settings modal-content"
            onSubmit={saveSettings}
        >
            <button 
                type="buttton"
                className="modal-content__close-btn" 
                onClick={toggleHeaderModal}
            >
                <span className="icon x-icon"></span>
            </button>
            <h2>
                {spanish? "Opciones de accesibilidad" : "Accesibility options"}
            </h2>

            <div>
                <SwitchBtn
                    optionName={spanish? "Modo de alto contraste" : "High contrast mode"}
                    leftTag={spanish? "Apagado" : "Off"}
                    inputId={"high-contrast"} 
                    rightTag={spanish? "Prendido" : "On"} 
                    defaultCheck={highContrast && "checked"}
                    handleChange={toggleHighContrast}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Animaciones" : "Animations"}
                    leftTag={spanish? "Desactivar" : "Disable"}
                    inputId={"animations"} 
                    rightTag={spanish? "Activar" : "Enable"} 
                    defaultCheck={animations && "checked"}
                    handleChange={toggleAnimations}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Idioma" : "Language"}
                    leftTag={"ENG"}
                    inputId={"spanish"} 
                    rightTag={"ESP"} 
                    defaultCheck={spanish && "checked"}
                    handleChange={toggleSpanish}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Tema" : "Theme"}
                    leftTag={spanish? "Claro" : "Light"}
                    inputId={"theme"} 
                    rightTag={spanish? "Oscuro" : "Dark"} 
                    defaultCheck={darkTheme && "checked"}
                    handleChange={toggleDarkTheme}
                />
            </div>

            <div className="modal-content__bottom-btns">
                <button 
                    type="button"
                    className="fill-btn"
                    onClick={toggleHeaderModal}
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
