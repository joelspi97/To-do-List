import React from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import { MainProvider } from './contexts/MainContext';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import './scss/core/reset.scss';
import './scss/core/generic-classes.scss';

function App() {
    return (
        <SettingsProvider>
            <Header />
      
            <MainProvider>
                <Main />
            </MainProvider>
      
            <Footer />
        </SettingsProvider>
    );
}

export default App;
