import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const MainContext = React.createContext();

function useMainContext() {
    return React.useContext(MainContext);
}

function MainProvider(props) {
    /* Modal */
    const [formValue, setFormValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    function showModal() {
        setOpenModal(true);
        document.body.classList.add('no-scroll')
    }
    function hideModal() {
        setOpenModal(false);
        setFormValue('');
        setEditedTodoId('');
        document.body.classList.remove('no-scroll')
    }


    /* New Todos */
    const [newTodos, setNewTodos] = React.useState([]);

    function createNewTodo(submitEvent, description, priority, editedTodoId) {
        submitEvent.preventDefault();
        hideModal();

        if(newTodos.find(todo => todo.id === editedTodoId)) {
            const editedTodos = [...newTodos];
            const pos = editedTodos.map(todo => todo.id).indexOf(editedTodoId);
            editedTodos[pos].description = description;
            editedTodos[pos].priority = priority;
            setNewTodos(editedTodos);
            setEditedTodoId('');
        } else {
            setNewTodos(prevTodos => [...prevTodos, 
                { 
                    completed: false,
                    id: uuidv4(),
                    description: description,
                    priority: priority,
                }
            ]);
        }
    }


    /* Completed Todos */
    const [completedTodos, setCompletedTodos] = React.useState([]);

    function markCompleted(currentId) {
        const currentTodo = newTodos.find(todo => todo.id === currentId);
        currentTodo.completed = true;
        setCompletedTodos([...completedTodos, currentTodo]);
        deleteTodo(currentId);
    }


    /*Search Todos*/
    const [searchValue, setSearchValue] = React.useState('');

    let searchedTodos;
    if(!searchValue.length > 0) {
        searchedTodos = newTodos;
    } else {
        searchedTodos = newTodos.filter(todo => todo.description.toLowerCase().includes(searchValue));
    }

    let searchedCompletedTodos;
    if(!searchValue.length > 0) {
        searchedCompletedTodos = completedTodos;
    } else {
        searchedCompletedTodos = completedTodos.filter(todo => todo.description.toLowerCase().includes(searchValue));
    }


    /* Delete Todos */
    function deleteTodo(currentId) {
        const reducedTodos = [...newTodos];
        const pos = reducedTodos.findIndex(todo => todo.id === currentId);
        reducedTodos.splice(pos, 1);
        setNewTodos(reducedTodos);
    }
    function deleteCompletedTodo(currentId) {
        const reducedTodos = [...completedTodos];
        const pos = reducedTodos.findIndex(todo => todo.id === currentId);
        reducedTodos.splice(pos, 1);
        setCompletedTodos(reducedTodos);
    }


    /* Edit Todo */
    const [editedTodoId, setEditedTodoId] = React.useState('');

    function editTodo(currentId) {
        showModal();
        setEditedTodoId(currentId);
        const currentTodo = newTodos.find(todo => todo.id === currentId);
        setFormValue(currentTodo.description);
    }

    
    return (
        <MainContext.Provider
            value={{
                newTodos,
                setNewTodos,
                createNewTodo,
                formValue, 
                setFormValue,
                openModal,
                showModal,
                hideModal,
                completedTodos,
                setCompletedTodos,
                markCompleted,
                searchValue,
                setSearchValue,
                searchedTodos,
                searchedCompletedTodos,
                deleteTodo,
                deleteCompletedTodo,
                editedTodoId,
                editTodo,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}

export { useMainContext, MainProvider };