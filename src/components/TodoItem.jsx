import React, { useState } from "react";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem = ({ id, title, deleteTodo, setCompletedTodo }) => {
  const [completed, setCompleted] = useState(false);

  const completedTodo = () => {
    //for update the ui
    setCompleted(!completed);
    //for update the todo item as completed
    setCompletedTodo(id);
  };

  return (
    <li className="App__todo-item">
      {/* Icon Left : check */}
      <FaCheck
        className="App__todo-item__check"
        style={{
          visibility: completed ? "visible" : "hidden",
        }}
      />

      {/* Title */}
      <span
        className="App__todo-item__title"
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
        onClick={() => completedTodo()}
      >
        {title}
      </span>

      {/* Icon Right : check */}
      <FaRegTrashAlt
        className="App__todo-item__remove"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
};

export default TodoItem;
