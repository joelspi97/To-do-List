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
    General {
      1) Que cuando la página cargue del local
      storage no quede en blanco por ese instante 
      (¿Agregar loading screen?)
      2) Subir la página a internet
      3) Compartir el proyecto en mi LinkedIn
    }

    Accesibilidad {
      1) Revisar que toda la página sea 100% 
      navegable usando solamente el teclado
      2) Asegurarse que todo sea accesible 
      para lectores de pantalla (tanto en 
      español como en inglés)
    }

    Diseño {
      1) Elegir bien la paleta de colores
      2) Hacer que la página sea completamente 
      responsive. Cuando este en desktop, que las 
      listas no se vean en una unica columnna, 
      que sean dos columnas lado a lado.
      3) Rediseñar el Header, el Footer y los 
      TodoItem's
    }

    Header {
      1) Solucionar bug de animaciones
      2) Solucionar bug del boton de animaciones 
      cuando se pone en español 
    }

    Main {
      1) Hacer que cuando haya más de un solo Todo 
      aparezca un cartel que diga algo como:
      "Podés arrastrar las tareas para organizarlas 
      como quieras"
    }
*/