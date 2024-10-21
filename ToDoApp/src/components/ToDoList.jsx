import React from 'react';
import ToDoItem from './ToDoItem';
import "./style.css";

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo, toggleEdit }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;