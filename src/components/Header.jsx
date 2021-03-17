import React, { useState } from "react";
import "./Header.css";

const Header = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  //handle Change
  const onChange = (event) => {
    setTitle(event.target.value);
  };

  //handle Click
  const onClick = () => {
    addTodo(title);
  };

  return (
    <header className="App__header">
      <h1 className="App__title">Todo App</h1>

      <div className="App__input-container">
        <input
          type="text"
          onChange={onChange}
          className="App__input"
          placeholder="Title..."
        />
        <button className="App__add-btn" onClick={onClick}>
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
