import React, { Component } from "react";
import Clock from "./components/clock";
import Todos from "./components/todos";
import NewTodo from "./components/newTodo";
import NavBar from "./components/navbar";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: "First Task",
        isComplete: false,
      },
      {
        id: 2,
        task: "Second Task",
        isComplete: false,
      },
      {
        id: 3,
        task: "Third Task",
        isComplete: true,
      },
      {
        id: 4,
        task: "Fourth Task",
        isComplete: true,
      },
    ],
  };

  handleComplete = (todo) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].isComplete = !todos[index].isComplete;
    this.setState({ todos });
  };

  handleClearAll = () => {
    const todos = [];
    this.setState({ todos });
  };

  render() {
    // console.log(this.state.date);
    return (
      <div className="app-body">
        <NavBar />
        <Clock />
        <NewTodo onClearAll={this.handleClearAll} />
        <Todos
          todos={this.state.todos}
          onComplete={this.handleComplete}
          onClearAll={this.handleClearAll}
        />
      </div>
    );
  }
}

export default App;
