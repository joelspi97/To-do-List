import { createStore } from 'redux';
import modalReducer from './reducers/modalReducers';

const initialState = {
    showHeaderModal: false,
    showTodoModal: false,
    todos: [],
    completedTodos: [],
};

export default createStore(modalReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
