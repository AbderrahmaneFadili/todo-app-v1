import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosList: [],
    };
  }

  //add todo
  addTodo = (title) => {
    const { todosList } = this.state;
    todosList.push({ title, id: Math.random() });
    this.setState({
      todosList,
    });
  };

  //delete todo
  deleteTodo = (todoId) => {
    const { todosList } = this.state;
    const newTodoList = todosList.filter((todo) => todo.id !== todoId);
    this.setState({
      todosList: newTodoList,
    });
  };

  render() {
    const { todosList } = this.state;
    return (
      <div className="Todo-App">
        <div className="Todo-App__container">
          <Header addTodo={this.addTodo} />
          <TodoList todos={todosList} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
