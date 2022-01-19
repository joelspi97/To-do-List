import { createStore, combineReducers } from 'redux';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import modalsReducer from './reducers/modalsReducer';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
    modals: modalsReducer,
    settings: settingsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['modals'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);