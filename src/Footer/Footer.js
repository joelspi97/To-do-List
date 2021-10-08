import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Footer() {
    const {
        animations,
        toggleAnimations,
        highContrast,
        toggleHighContrast,
        spanish,
        toggleSpanish,
        darkTheme,
        toggleDarkTheme,} = React.useContext(TodoContext);

    return (
        <footer className="footer">
            <div className="project-padding">
                <p className="footer__paragraph" >Want to see the source code of this website? {/* <a className="footer__link" href="#">Visit this project's GitHub repository</a> */}</p>
                <p className="footer__paragraph" >Want to see more pages I made? <a className="footer__link" href="https://joelspinelli.herokuapp.com/">Check my portfolio!</a></p>
                <p className="footer__paragraph" >Made by Joel Spinelli with React.js, <span role="img" aria-label="love">❤️</span> ️and <span role="img" aria-label="happy pigs">🐷</span></p>
            </div>
        </footer>
    )
}

export { Footer };
