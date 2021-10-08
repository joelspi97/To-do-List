import React from 'react';
import { SwitchBtn } from '../../../genericComponents/SwitchBtn/SwitchBtn';

function SettingsMenu({hideHeaderModal}) {
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
            <h2>Accesibility options</h2>

            <div>
                <SwitchBtn
                    optionName={"High contrast mode"}
                    leftTag={"Off"}
                    inputId={"high-contrast"} 
                    rightTag={"On"} 
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={"Animations"}
                    leftTag={"Disable"}
                    inputId={"animations"} 
                    rightTag={"Enable"} 
                    defaultCheck={"checked"}
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={"Language"}
                    leftTag={"ENG"}
                    inputId={"language"} 
                    rightTag={"ESP"} 
                />
            </div>
            <div>
                <SwitchBtn
                    optionName={"Theme"}
                    leftTag={"Light"}
                    inputId={"theme"} 
                    rightTag={"Dark"} 
                />
            </div>

            <div className="modal__bottom-btns">
                <button 
                    type="submit"
                    className={`submit-btn ${true && "fill-btn"}`} 
                >
                    Save changes
                </button>
                <button 
                    type="button"
                    className="cancel-btn" 
                    onClick={hideHeaderModal}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export { SettingsMenu };
