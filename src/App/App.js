import React from 'react';
import { SettingsProvider } from '../SettingsContext/SettingsContext.js';
import { Header } from "../Header/Header.js";
import { Main } from "../Main/Main.js";
import { Footer } from "../Footer/Footer.js";

function App() {
  return (
    <SettingsProvider>
      <Header />
      <Main />
      <Footer />
    </SettingsProvider>
  );
}

export { App };
