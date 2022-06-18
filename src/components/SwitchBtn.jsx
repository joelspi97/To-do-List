import React from 'react';
import { connect } from 'react-redux';
import '../scss/components/SwitchBtn.scss';

function SwitchBtn(props) {

    const { optionName,
            optionNameId, 
            leftTag, 
            rightTag, 
            inputId, 
            defaultCheck, 
            handleChange,
            accessibleDescription, } = props;

    return (
        <div className="switch-btn">
            <h3 id={optionNameId} aria-label={optionName + ". " + accessibleDescription}>{optionName}</h3>
            <label
                className="switch-btn__label"
                htmlFor={inputId}
            >
                <span className="switch-btn__left-tag" aria-hidden="true">{leftTag}</span>
                <div className="switch-btn__input-wrapper">
                    <input 
                        aria-describedby={optionNameId}
                        className="switch-btn__input"
                        type="checkbox" 
                        id={inputId}
                        defaultChecked={defaultCheck}
                        onChange={handleChange}
                    />
                    <span className="switch-btn__slider"></span>
                </div>
                <span className="switch-btn__right-tag" aria-hidden="true">{rightTag}</span>
            </label>
        </div>
    );
};

export default connect(null, null)(SwitchBtn);