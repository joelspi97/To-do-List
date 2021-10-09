import React from 'react';

function SwitchBtn({ optionName, leftTag, rightTag, inputId, defaultCheck, handleChange }) {
    return (
        <div className="switch-btn">
            <h3>{optionName}</h3>
            <label
                className="switch-btn__label"
                htmlFor={inputId}
            >
                <span className="switch-btn__left-tag">{leftTag}</span>
                <div className="switch-btn__input-wrapper">
                    <input 
                        className="switch-btn__input"
                        type="checkbox" 
                        id={inputId}
                        defaultChecked={defaultCheck}
                        onChange={handleChange}
                    />
                    <span className="switch-btn__slider"></span>
                </div>
                <span className="switch-btn__right-tag">{rightTag}</span>
            </label>
        </div>
    );
}

export { SwitchBtn };