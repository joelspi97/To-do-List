import React from 'react';
import { useSettings, useSettingsUpdate } from '../../SettingsContext/SettingsContext';
import { SwitchBtn } from '../../genericComponents/SwitchBtn/SwitchBtn';

function SettingsMenu({hideHeaderModal}) {
    const {
        animations,
        highContrast,
        colorBlind,
        spanish,
        darkTheme,
        } = useSettings();

    const {
        toggleAnimations,
        toggleHighContrast,
        toggleColorBlind,
        toggleSpanish,
        toggleDarkTheme,} = useSettingsUpdate();

    function saveSettings(e) {
        e.preventDefault();
        hideHeaderModal();
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
                onClick={hideHeaderModal}
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
                    handleChange={toggleHighContrast}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Modo daltónico" : "Color blind mode"}
                    leftTag={spanish? "Apagado" : "Off"}
                    inputId={"color-blind"} 
                    rightTag={spanish? "Prendido" : "On"} 
                    handleChange={toggleColorBlind}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Animaciones" : "Animations"}
                    leftTag={spanish? "Desactivar" : "Disable"}
                    inputId={"animations"} 
                    rightTag={spanish? "Activar" : "Enable"} 
                    defaultCheck={"checked"}
                    handleChange={toggleAnimations}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Idioma" : "Language"}
                    leftTag={"ENG"}
                    inputId={"language"} 
                    rightTag={"ESP"} 
                    handleChange={toggleSpanish}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={spanish? "Tema" : "Theme"}
                    leftTag={spanish? "Claro" : "Light"}
                    inputId={"theme"} 
                    rightTag={spanish? "Oscuro" : "Dark"} 
                    handleChange={toggleDarkTheme}
                />
            </div>

            <div className="modal-content__bottom-btns">
                <button 
                    type="submit"
                    className={true && "fill-btn"} 
                >
                    {spanish? "Guardar cambios" : "Save changes"}
                </button>
                <button 
                    type="button"
                    onClick={hideHeaderModal}
                >
                    {spanish? "Cancelar" : "Cancel"}
                </button>
            </div>
        </form>
    );
}

export { SettingsMenu };
