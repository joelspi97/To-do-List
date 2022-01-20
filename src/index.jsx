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
    Actual {
      falta implementar redux en search bar y también 
      en edit.
      Falta el reorder de dnd
    }

    General {
        1) Implementar redux (solo falta la logica
          de los todos)
        2) Implementar typescript
        3) Que cuando la pagina cargue del local
        storage no quede en blanco por ese instante
        4) Subir la página a internet
        5) Compartir el proyecto en mi LinkedIn
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