import React, { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MainContext = createContext();

function useMainContext() {
    return useContext(MainContext);
}

function MainProvider(props) {
    /* Modal */
    const [formValue, setFormValue] = useState('');

    function hideModal() {
        setFormValue('');
        setEditedTodoId('');
    }


    /* New Todos */
    const [newTodos, setNewTodos] = useState([]);

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
    const [completedTodos, setCompletedTodos] = useState([]);

    function markCompleted(currentId) {
        const currentTodo = newTodos.find(todo => todo.id === currentId);
        currentTodo.completed = true;
        setCompletedTodos([...completedTodos, currentTodo]);
        deleteTodo(currentId);
    }


    /*Search Todos*/
    const [searchValue, setSearchValue] = useState('');

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
    const [editedTodoId, setEditedTodoId] = useState('');

    function editTodo(currentId) {
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