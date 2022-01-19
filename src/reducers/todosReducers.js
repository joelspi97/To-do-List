const todosInitialState = {};

function todosReducer(todosState = todosInitialState, action) {
    switch (action.type) {
        case '':
            return {};

        default:
            return todosState;
    };
};

export default todosReducer;