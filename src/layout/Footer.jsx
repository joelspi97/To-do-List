import React from 'react';
import { connect } from 'react-redux';
import '../scss/layout/Footer.scss';

function Footer(props) {
    const { spanish,
            showTodoModal, 
            showHeaderModal } = props;

    return (
        <footer className="footer">
            <div className="project-padding">
                <p className="footer__paragraph">
                    {spanish? "¿Querés ver el código fuente de este sitio web? " 
                            : "Want to see the source code of this website? "}
                    <a 
                        className="footer__link" 
                        href="https://github.com/joelspi97/To-do-List"
                        tabIndex={(showTodoModal || showHeaderModal)? -1 : 0}
                    >
                        {spanish? "Visita el repositiorio de este proyecto en GitHub" 
                                : "Visit this project's GitHub repository"}
                    </a>
                </p>
                <p className="footer__paragraph">
                    {spanish? "¿Querés ver más páginas que hice? " 
                            : "Want to see more pages I made? "}
                    <a 
                        className="footer__link"
                        href="https://joelspinelli.herokuapp.com/"
                        tabIndex={(showTodoModal || showHeaderModal)? -1 : 0}
                    >
                        {spanish? "¡Visitá mi portfolio!" 
                                : "Check my portfolio!"}
                    </a>
                </p>
                <p className="footer__paragraph">
                    {spanish? "Hecho por Joel Spinelli con React.js, Redux " 
                            : "Made by Joel Spinelli with React.js, Redux "}
                    <span 
                        role="img" 
                        aria-label={spanish? "amor" : "love"}
                    >
                        ❤️
                    </span> ️
                    {spanish? "y " : "and "}
                    <span 
                        role="img" 
                        aria-label={spanish? "chanchos felices" : "happy pigs"}
                    >
                        🐷
                    </span>
                </p>
            </div>
        </footer>
    );
};

function mapStateToProps(state) {
    return (
        {
            spanish: state.settings.spanish,
            showHeaderModal: state.modals.showHeaderModal,
            showTodoModal: state.modals.showTodoModal,
        }
    );
};

export default connect(mapStateToProps, null)(Footer);
