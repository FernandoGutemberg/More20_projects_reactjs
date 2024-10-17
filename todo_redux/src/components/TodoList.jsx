import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo, removeTodo, filterTodos } from '../slices/todoSlice';

const TodoList = () => {
    const { list, filter } = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const filterList = list.filter((todo) => {
        if (filter === "alt") return true;
        if (filter === "completed") return todo.completed;
        if (filter === "incomplete") return !todo.completed;
        return true;
    });

    return (
        <div>
            <button onClick={() => dispatch(filterTodos("all"))}>Todas</button>
            <button onClick={() => dispatch(filterTodos("completed"))}>Completas</button>
            <button onClick={() => dispatch(filterTodos("incomplete"))}>Incompletas</button>
            <ul>
                {filterList.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList