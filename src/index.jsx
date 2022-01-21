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
        1) Implementar typescript
        2) Que cuando la página cargue del local
        storage no quede en blanco por ese instante
        3) Subir la página a internet
        4) Compartir el proyecto en mi LinkedIn
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
        2) Rediseñar el Header, el Footer y los 
        TodoItem's
        3) Hacer que la página sea completamente 
        responsive
        4) Agregar animaciones/transiciones
    }

    Header {
        1) Solucionar bug de animaciones
    }

    Main {
        1) Hacer que cuando haya más de un solo Todo 
        aparezca un cartel que diga algo como:
        "Podés arrastrar las tareas para organizarlas 
        como quieras"
        2) Hacer que cuando se cree un nuevo ToDo, 
        salga un cartel que diga algo como: 
        "¡Todo creado con éxito!" y que tenga alguna 
        mínima animación
        3) Agregar loading screen?
    }
*/