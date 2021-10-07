import React from 'react';

function SettingsMenu({hideHeaderModal}) {
    function handleSettingsSubmit(e) {
        e.preventDefault();
        hideHeaderModal();
        alert('xd');
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

            <section>
                <h2>Language</h2>
            </section>

            <section>
                <h2>Accesibility options</h2>
            </section>

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
