import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import NewTodoBtn from '../components/NewTodoBtn';
import Modal from '../components/Modal'
import TodoMaker from '../components/TodoMaker';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import TodoItem from '../components/TodoItem';
import '../scss/layout/Main.scss';

function Main(props) {
    const { showTodoModal,
            uncompletedTodos,
            completedTodos,
            spanish, } = props;
    
    const [searchValue, setSearchValue] = useState('');

    let searchedUncompletedTodos;
    if(!searchValue.length > 0) {
        searchedUncompletedTodos = uncompletedTodos;
    } else {
        searchedUncompletedTodos = uncompletedTodos.filter(todo => 
            todo.description.toString().toLowerCase().includes(searchValue)
        );
    };

    let searchedCompletedTodos;
    if(!searchValue.length > 0) {
        searchedCompletedTodos = completedTodos;
    } else {
        searchedCompletedTodos = completedTodos.filter(todo => 
            todo.description.toString().toLowerCase().includes(searchValue)
        );
    };

    /* beautiful-dnd */
    function reorder(list, startIndex, endIndex) {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
    /* /beautiful-dnd */
    
    return (
        <main className="main">
            <section className="project-padding">
                <h1 className="main__heading">
                    {spanish? "¡Bienvenido a To-Do List!" : "Welcome to To-Do List!"}
                </h1>
                <p className="main__paragraph">
                    {spanish? "Este sitio web te permitirá escribir tu propia lista de To-Do's y controlar el avance de tus objetivos de una forma eficiente" 
                            : "This website will allow you to write down your own To-Do list and keep track of your goals in an efficient way"}
                </p>
            </section>
            <section className="project-padding">

                <NewTodoBtn />
                
                {showTodoModal && (
                    <Modal>
                        <TodoMaker/>
                    </Modal>
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

                        // setNewTodos(prevTodos => reorder(prevTodos, source.index, destination.index));
                    }}
                >
                    <Droppable droppableId="pending">
                        {(dropableProvided) => 
                            <List 
                                heading={spanish? "Tareas pendientes" : "Pending tasks"}
                                dropableProvided={dropableProvided}
                            >
                                {spanish? (uncompletedTodos.length === 0) && "¡Felicitaciones! ¡No tenés ninguna tarea pendiente!" 
                                        : (uncompletedTodos.length === 0) && "Hooray! You don't have any pending task!"}

                                {spanish? (uncompletedTodos.length > 0 && searchedUncompletedTodos.length === 0) && "No encontramos ningun To-Do en esta lista que contenga eso... 🤔" 
                                        : (uncompletedTodos.length > 0 && searchedUncompletedTodos.length === 0) && "We didn't find any To-Do's in this list that contains that... 🤔"}

                                {searchedUncompletedTodos.map((todo, index) => 
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
                                            />
                                        }
                                    </Draggable>
                                )}
                            </List>
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
                        // setCompletedTodos(prevTodos => reorder(prevTodos, source.index, destination.index));
                    }}
                >
                    <Droppable droppableId="completed">
                        {(dropableProvided) => 
                            <List
                                heading={spanish? "Tareas completadas" : "Completed tasks"}
                                dropableProvided={dropableProvided}
                            >
                                {spanish? (completedTodos.length === 0) && "Los To-Do's que completes se mostrarán en esta lista" 
                                        : (completedTodos.length === 0) && "Your completed To-Do's will be displayed in this section"}
                                
                                {spanish? (completedTodos.length > 0 && searchedCompletedTodos.length === 0) && "No encontramos ningun To-Do en esta lista que contenga eso... 🤔" 
                                        : (completedTodos.length > 0 && searchedCompletedTodos.length === 0) && "We didn't find any To-Do's in this list that contains that... 🤔"}

                                {searchedCompletedTodos.map((todo, index) => 
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
                                            />
                                        }
                                    </Draggable>
                                )}
                            </List>
                        }
                    </Droppable>
                </DragDropContext>
            </section>
        </main>
    );
};


function mapStateToProps(state) {
    return (
        {
            showTodoModal: state.modals.showTodoModal,
            uncompletedTodos: state.todos.uncompletedTodos,
            completedTodos: state.todos.completedTodos,
            spanish: state.settings.spanish,
        }
    );
};

export default connect(mapStateToProps, null)(Main);
