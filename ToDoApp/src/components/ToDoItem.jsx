
import { useState } from 'react';
import "./style.css";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo, toggleEdit }) {
  const [newText, setNewText] = useState(todo.text);

  function handleEdit() {
    if (todo.editable) {
      editTodo(todo.id, newText);
    } else {
      toggleEdit(todo.id);
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.completed ? '✔️' : ''}{todo.editable ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (todo.text
      )}</span>
      <div className="buttons">
        <button onClick={() => toggleComplete(todo.id)} className="complete-btn">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleEdit} className="edit-btn">
          {todo.editable ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;