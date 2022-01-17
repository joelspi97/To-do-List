import { createStore } from "redux";

const initialState = {
    todos: [],
    completedTodos: [],
};

function reducer(state = initialState, action) {
    return state;
};

export default createStore(reducer);