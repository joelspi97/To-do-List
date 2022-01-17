import React from 'react';
import { connect } from 'react-redux';
import { toggleHeaderModal } from '../actions/modalActions';
import { useSettings, useSettingsUpdate } from '../contexts/SettingsContext';
import SwitchBtn from '../components/SwitchBtn';
import '../scss/components/SettingsMenu.scss';

function SettingsMenu({ toggleHeaderModal }) {
    const {
        animations,
        highContrast,
        spanish,
        darkTheme,
        } = useSettings();

    const {
        toggleAnimations,
        toggleHighContrast,
        toggleSpanish,
        toggleDarkTheme,} = useSettingsUpdate();

    function saveSettings(e) {
        e.preventDefault();
        alert('xd');
    }

    
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
}

const mapDispatchToProps = {
    toggleHeaderModal,
};

export default connect(null, mapDispatchToProps)(SettingsMenu);
