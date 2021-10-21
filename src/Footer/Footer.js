import React from 'react';
import { useSettings } from '../SettingsContext/SettingsContext';

function Footer() {
    const { spanish } = useSettings();

    return (
        <footer className="footer">
            <div className="project-padding">
                <p className="footer__paragraph">
                    {spanish? "¿Querés ver el código fuente de este sitio web?" : "Want to see the source code of this website?"}
                    {/* <a className="footer__link" href="#">
                        {spanish? "Visita el repositiorio de este proyecto en GitHub" : "Visit this project's GitHub repository"}
                    </a> */}
                </p>
                <p className="footer__paragraph">
                    {spanish? "¿Querés ver más páginas que hice? " : "Want to see more pages I made? "}
                    <a className="footer__link" href="https://joelspinelli.herokuapp.com/">
                        {spanish? "¡Visitá mi portfolio!" : "Check my portfolio!"}
                    </a>
                </p>
                <p className="footer__paragraph">
                    {spanish? "Hecho por Joel Spinelli con React.js, " : "Made by Joel Spinelli with React.js, "}
                     <span 
                        role="img" 
                        aria-label={spanish? "amor" : "love"}
                    >
                        ❤️
                    </span> ️
                    {spanish? "y " : "and "}
                    <span 
                        role="img" 
                        aria-label={spanish? "cerdos felices" : "happy pigs"}>
                        🐷
                    </span>
                </p>
            </div>
        </footer>
    )
}

export { Footer };
