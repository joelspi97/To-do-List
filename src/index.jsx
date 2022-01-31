import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  Diseño {
    1) Hacer que la página sea completamente 
    responsive. Cuando este en desktop, que las 
    listas no se vean en una única columnna, 
    que sean dos columnas lado a lado.
    2) Elegir bien la paleta de colores
    3) Rediseñar el Header, el Footer y los 
    TodoItem's
  }

  Accesibilidad {
    1) Revisar que toda la página sea 100% 
    navegable usando solamente el teclado {
      a) Que todos los inputs, botones y links
      sean selecionable y operables
      b) Que los focus sean visibles
      c) Que se puedan cerrar los modals con esc
    }
    2) Asegurarse que todo sea accesible 
    para lectores de pantalla (tanto en 
    español como en inglés)
  }

  General {
    1) Subir la página a internet
    2) Compartir el proyecto en mi LinkedIn
  }
*/