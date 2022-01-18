import { createStore, combineReducers } from 'redux';
import modalsReducer from './reducers/modalsReducer';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
    modals: modalsReducer,
    settings: settingsReducer,
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
