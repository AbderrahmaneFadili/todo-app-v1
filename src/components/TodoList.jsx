import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="App__todo-list">
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={`${i}`}
            title={todo.title}
            id={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
