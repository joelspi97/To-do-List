import React from 'react';
import { connect } from 'react-redux';
import { reorderUncompletedTodos, reorderCompletedTodos } from '../actions/todosActions';
import NewTodoBtn from '../components/NewTodoBtn';
import Modal from '../components/Modal'
import TodoMaker from '../components/TodoMaker';
import NewTodoAnimation from '../components/NewTodoAnimation';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import '../scss/layout/Main.scss';

function Main(props) {
    const { showTodoModal,
            showTodoAnimationModal,
            uncompletedTodos,
            completedTodos,
            reorderUncompletedTodos,
            reorderCompletedTodos,
            spanish, } = props;

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

                {showTodoAnimationModal && (
                    <Modal>
                        <NewTodoAnimation />
                    </Modal>
                )}

                <SearchBar />
                
                <p className="main__paragraph">
                    {spanish ? "Podés arrastrar y soltar los To-do's para ordenarlos como mejor te parezca" : 
                              "You can drag and drop your To-do's to arrange them however you want"}
                </p>

                <List
                    droppableId={"pending"}
                    heading={spanish ? "Tareas pendientes" : "Pending tasks"}
                    todoList={uncompletedTodos}
                    reorderAction={reorderUncompletedTodos}
                    initialMessage={spanish ? "¡Felicitaciones! ¡No tenés ninguna tarea pendiente!" 
                                            : "Hooray! You don't have any pending task!"}
                />

                <List
                    droppableId={"completed"}
                    heading={spanish ? "Tareas completadas" : "Completed tasks"}
                    todoList={completedTodos}
                    reorderAction={reorderCompletedTodos}
                    initialMessage={spanish ? "Los To-Do's que completes se mostrarán en esta lista" 
                                            : "Your completed To-Do's will be displayed in this section"}
                />
            </section>
        </main>
    );
};

function mapStateToProps(state) {
    return (
        {
            showTodoModal: state.modals.showTodoModal,
            showTodoAnimationModal: state.modals.showTodoAnimationModal,
            uncompletedTodos: state.todos.uncompletedTodos,
            completedTodos: state.todos.completedTodos,
            spanish: state.settings.spanish,
        }
    );
};

const mapDispatchToProps = {
    reorderCompletedTodos,
    reorderUncompletedTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
