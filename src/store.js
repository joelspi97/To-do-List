import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import todosReducer from './reducers/todosReducers';
import modalsReducer from './reducers/modalsReducer';
import settingsReducer from './reducers/settingsReducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['modals'],
};

const rootReducer = combineReducers({
    todos: todosReducer,
    modals: modalsReducer,
    settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
