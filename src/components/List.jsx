import React from 'react';
import { connect } from 'react-redux';
import { reorderUncompletedTodos, reorderCompletedTodos } from '../actions/todosActions';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import '../scss/components/List.scss';

function List(props) {
    const { searchValue,
            droppableId,
            heading,
            initialMessage, 
            todoList,
            reorderAction,
            spanish, } = props;

    let searchedTodos;
    if(!searchValue.length > 0) {
        searchedTodos = todoList;
    } else {
        searchedTodos = todoList.filter(todo => 
            todo.description.toString().toLowerCase().includes(searchValue)
        );
    };

    return (
        <section className="list-section">
            <h2>
                {heading}
            </h2>

            <DragDropContext 
                    onDragEnd={
                        result => {
                            const { source, destination } = result;
                            if(!destination) {
                                return;
                            }
                            if(source.index === destination.index && source.droppableId === destination.droppableId) {
                                return;
                            }

                            reorderAction(
                                {
                                    startIndex: source.index, 
                                    endIndex: destination.index,
                                }
                            );
                        }
                    }
                >
                    <Droppable droppableId={droppableId}>
                        {(dropableProvided) => 
                            <ul 
                                {...dropableProvided.droppableProps}
                                ref={dropableProvided.innerRef}
                            >
                                { (todoList.length === 0) && initialMessage }

                                {
                                    ((todoList.length > 0) && (searchedTodos.length === 0)) && (
                                        spanish ? "No encontramos ningún To-Do en esta lista que contenga eso... 🤔" 
                                                : "We didn't find any To-Do's in this list that contains that... 🤔"
                                    )
                                }

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
                                            />
                                        }
                                    </Draggable>
                                )}
                                
                                {dropableProvided.placeholder}
                            </ul>
                        }
                    </Droppable>
                </DragDropContext>
        </section>
    );
};

function mapStateToProps(state) {
    return (
        {
            spanish: state.settings.spanish,
            uncompletedTodos: state.todos.uncompletedTodos,
            completedTodos: state.todos.completedTodos,
            searchValue: state.todos.searchValue,
        }
    );
};

const mapDispatchToProps = {
    reorderUncompletedTodos,
    reorderCompletedTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
