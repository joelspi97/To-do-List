import React from 'react';
import logo from '../images/logo.png';

function Header(props) {
    return (
        <header className="header">
            <div className="project-padding header__grid">
                <div className="header__wrapper">
                    <img className="header__logo" src={logo} alt="Logo" />
                    <h1 className="header__heading">To-Do List!</h1>
                </div>
                {props.children}
            </div>
        </header>
    )
}

export { Header };