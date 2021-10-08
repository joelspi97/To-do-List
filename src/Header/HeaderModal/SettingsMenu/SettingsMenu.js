import React from 'react';
import { useSettings, useSettingsUpdate } from '../../../SettingsContext/SettingsContext';
import { SwitchBtn } from '../../../genericComponents/SwitchBtn/SwitchBtn';

function SettingsMenu({hideHeaderModal}) {
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

    function handleSettingsSubmit(e) {
        e.preventDefault();
        hideHeaderModal();
        alert('Acordarme que cuando haga el language switch también tengo que cambiar el atributo lang del elemento html');
    }
    return (
        <form 
            className="settings modal"
            onSubmit={handleSettingsSubmit}
        >
            <button 
                type="buttton"
                className="modal__close-btn" 
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

            <div className="modal__bottom-btns">
                <button 
                    type="submit"
                    className={`submit-btn ${true && "fill-btn"}`} 
                >
                    {spanish? "Guardar cambios" : "Save changes"}
                </button>
                <button 
                    type="button"
                    className="cancel-btn" 
                    onClick={hideHeaderModal}
                >
                    {spanish? "Cancelar" : "Cancel"}
                </button>
            </div>
        </form>
    );
}

export { SettingsMenu };
