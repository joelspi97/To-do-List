import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext.js';
import { Header } from "../Header/Header.js";
import { Main } from "../Main/Main.js";
import { Footer } from "../Footer/Footer.js";

function App() {
  return (
    <TodoProvider>
      <Header />
      <Main />
      <Footer />
    </TodoProvider>
  );
}

export { App };
