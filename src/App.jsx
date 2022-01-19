import React, { useEffect } from 'react';
import { MainProvider } from './contexts/MainContext';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import './scss/core/reset.scss';
import './scss/core/generic-classes.scss';

function App({ highContrast, spanish, animations, darkTheme }) {
    useEffect(() => {
        const root = document.documentElement;
        const MAIN_COLOR = '#288000';
        const MAIN_COLOR_HC = "#000000";
        const BG_COLOR_DARK = "#090d1c";
        const WHITE = "#ffffff";

        root.style.setProperty('--main-color', highContrast ? MAIN_COLOR_HC : MAIN_COLOR);
        root.style.setProperty('--footer-color', WHITE);

        root.style.setProperty('--secondary-color', darkTheme ? BG_COLOR_DARK : WHITE);
        root.style.setProperty('--black', darkTheme ? WHITE : BG_COLOR_DARK);

        if(highContrast && darkTheme) {
            root.style.setProperty('--main-color', WHITE);
            root.style.setProperty('--secondary-color', MAIN_COLOR_HC);
            root.style.setProperty('--black', WHITE);
            root.style.setProperty('--footer-color', MAIN_COLOR_HC);
        }
    }, [highContrast, darkTheme]);

    useEffect(()=> {
        const mainElement = document.querySelector('html');
    
        if (spanish) {
            mainElement.setAttribute('lang', 'es');
        } else {
            mainElement.setAttribute('lang', 'en');
        };
    }, [spanish]);

    useEffect(() => {
        const root = document.documentElement;
        const FOCUS_DURATION = '75ms';
        const SWITCH_DURATION = '400ms';

        root.style.setProperty('--focus-duration', animations ? FOCUS_DURATION : '0');
        root.style.setProperty('--switch-duration', animations ? SWITCH_DURATION : '0');
    }, [animations]);

    return (
        <>
            <Header />
            <MainProvider>
                <Main />
            </MainProvider>
            <Footer />
        </>
    );
};

function mapStateToProps(state) {
    return (
        {
            highContrast: state.settings.highContrast,
            spanish: state.settings.spanish,
            animations: state.settings.animations,
            darkTheme: state.settings.darkTheme,
        }
    );
}; 

export default connect(mapStateToProps, null)(App);
