import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { MAIN_COLOR,
         MAIN_COLOR_HC,
         BG_COLOR_DARK,
         WHITE,
         FOCUS_DURATION,
         THEME_DURATION,
         MODAL_DURATION,
         BANNER_DURATION, } from './helpers/constants';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import './scss/core/reset.scss';
import './scss/core/generic-classes.scss';

function App({ highContrast, spanish, animations, darkTheme }) {
    useLayoutEffect(() => {
        const root = document.documentElement;

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

    useLayoutEffect(()=> {
        const mainElement = document.querySelector('html');
    
        if (spanish) {
            mainElement.setAttribute('lang', 'es');
        } else {
            mainElement.setAttribute('lang', 'en');
        };
    }, [spanish]);

    useLayoutEffect(() => {
        const root = document.documentElement;
        
        root.style.setProperty('--focus-duration', animations ? FOCUS_DURATION : '0');
        root.style.setProperty('--theme-duration', animations ? THEME_DURATION : '0');
        root.style.setProperty('--modal-duration', animations ? MODAL_DURATION : '0');
        root.style.setProperty('--banner-duration', animations ? BANNER_DURATION : '0');
    }, [animations]);

    return (
        <>
            <Header />
            <Main />
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
