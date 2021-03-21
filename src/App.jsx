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
    todosList.push({ title, id: Math.random(), completed: false });
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

  //set completed todo
  setCompletedTodo = (id) => {
    const { todosList } = this.state;
    const todo = todosList.find((t) => t.id === id);
    todo.completed = true;
    todosList.forEach((t) => {
      if (t.id === id) {
        t = todo;
      }
    });
    this.setState({
      todosList,
    });
  };

  render() {
    const { todosList } = this.state;
    console.log(todosList);
    return (
      <div className="Todo-App">
        <div className="Todo-App__container">
          <Header addTodo={this.addTodo} />
          <TodoList
            todos={todosList}
            deleteTodo={this.deleteTodo}
            setCompletedTodo={this.setCompletedTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
