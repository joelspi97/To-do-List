import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { v4 as uuidv4 } from '../../node_modules/uuid';

import { NewTodoBtn } from './NewTodoBtn/NewTodoBtn';
import { MainModal } from './MainModal/MainModal';
import { TodoMaker } from './MainModal/TodoMaker/TodoMaker';
import { SearchBar } from './SearchBar/SearchBar';
import { CompletedList } from './Lists/CompletedList';
import { PendingList } from './Lists/PendingList';
import { TodoItem } from './TodoItem/TodoItem';
import { CompletedTodoItem } from './CompletedTodoItem/CompletedTodoItem';


function Main() {
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
        const pos = reducedTodos.map(todo => todo.id).indexOf(currentId);
        reducedTodos.splice(pos, 1);
        setNewTodos(reducedTodos);
    }
    function deleteCompletedTodo(currentId) {
        const reducedTodos = [...completedTodos];
        const pos = reducedTodos.map(todo => todo.id).indexOf(currentId);
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
    
    const PENDING_TODOS_KEY = "pendingTodos";
    const COMPLETED_TODOS_KEY = "completedTodos";


    /* Load Local Storage */
    React.useEffect(() => {
        const pendingTodos = JSON.parse(localStorage.getItem(PENDING_TODOS_KEY));
        if(pendingTodos) {
            setNewTodos(pendingTodos);
        }

        const finishedTodos = JSON.parse(localStorage.getItem(COMPLETED_TODOS_KEY));
        if(finishedTodos) {
            setCompletedTodos(finishedTodos);
        }
    }, []);


    /* Save Local Storage */
    React.useEffect(() => {
        localStorage.setItem(PENDING_TODOS_KEY, JSON.stringify(newTodos));
        localStorage.setItem(COMPLETED_TODOS_KEY, JSON.stringify(completedTodos));
    }, [newTodos, completedTodos]);
    

    /* beautiful-dnd */
    function reorder(list, startIndex, endIndex) {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
    return (
        <main className="main">
            <section className="project-padding">
                <h1 className="main__heading">Welcome to To-Do List!</h1>
                <p className="main__paragraph">This website will allow you to write down your own To-Do list and keep track of your goals in an efficient way</p>
            </section>
            <section className="project-padding">
                <NewTodoBtn 
                    showModal={showModal}
                />
                
                {openModal && (
                    <MainModal openModal={openModal}>
                        <TodoMaker
                            hideModal={hideModal}
                            createNewTodo={createNewTodo}
                            formValue={formValue}
                            setFormValue={setFormValue}
                            editedTodoId={editedTodoId}
                        />
                    </MainModal>
                )}

                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                
                <DragDropContext 
                    onDragEnd={result => {
                        const {source, destination} = result;
                        if(!destination) {
                            return;
                        }
                        if(source.index === destination.index && source.droppableId === destination.droppableId) {
                            return;
                        }

                        setNewTodos(prevTodos => reorder(prevTodos, source.index, destination.index));
                    }}
                >
                    <Droppable droppableId="pending">
                        {(dropableProvided) => 
                            <PendingList 
                                dropableProvided={dropableProvided}
                            >
                                {(newTodos.length === 0) && "Hooray! You don't have any pending task!"}
                                {(newTodos.length > 0 && searchedTodos.length === 0) && "We didn't find any Todo in this list that contains that 🤔"}

                                {searchedTodos.map((todo, index) => 
                                    <Draggable 
                                        key={todo.id} 
                                        draggableId={todo.id} 
                                        index={index}
                                    >
                                        {(draggableProvided) => 
                                            <TodoItem 
                                                draggableProvided={draggableProvided}
                                                description={todo.description}
                                                id={todo.id}
                                                key={todo.id}
                                                priority={todo.priority}
                                                completed={todo.completed}
                                                markCompleted={markCompleted}
                                                deleteTodo={deleteTodo}
                                                editTodo={editTodo}
                                            />
                                        }
                                    </Draggable>
                                )}
                            </PendingList>
                        }
                    </Droppable>
                </DragDropContext>
                <DragDropContext
                    onDragEnd={result => {
                        const {source, destination} = result;
                        if(!destination) {
                            return;
                        }
                        if(source.index === destination.index && source.droppableId === destination.droppableId) {
                            return;
                        }

                        setCompletedTodos(prevTodos => reorder(prevTodos, source.index, destination.index));
                    }}
                >
                    <Droppable droppableId="completed">
                        {(dropableProvided) => 
                            <CompletedList
                                dropableProvided={dropableProvided}
                            >
                                {(completedTodos.length === 0) && "Your completed To-Do's will be displayed in this section"}
                                {(completedTodos.length > 0 && searchedCompletedTodos.length === 0) && "We didn't find any Todo in this list that contains that 🤔"}

                                {searchedCompletedTodos.map((todo, index) => 
                                    <Draggable 
                                        key={todo.id} 
                                        draggableId={todo.id} 
                                        index={index}
                                    >
                                        {(draggableProvided) => 
                                            <CompletedTodoItem 
                                                draggableProvided={draggableProvided}
                                                description={todo.description}
                                                id={todo.id}
                                                key={todo.id}
                                                priority={todo.priority}
                                                completed={todo.completed}
                                                deleteCompletedTodo={deleteCompletedTodo}
                                            />
                                        }
                                    </Draggable>
                                )}
                            </CompletedList>
                        }
                    </Droppable>
                </DragDropContext>
                
            </section>
        </main>
    )
}

export { Main };
