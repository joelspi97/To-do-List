import React from 'react';
import { Header } from "../Header/Header.js";
import { Settings } from '../Header/Settings/Settings.js';
import { Main } from "../Main/Main.js";
import { Footer } from "../Footer/Footer.js";

function App() {
  
  return (
    <>
      <Header>
        <Settings />
      </Header>

      <Main />

      <Footer />
    </>
  );
}

export { App };
