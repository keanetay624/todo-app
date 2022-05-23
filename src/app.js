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
    input: "",
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

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log(this.state.input)
  }

  handleAddTodo = (e) => {
    e.preventDefault();
    this.addTodo(this.state.input);
  }

  addTodo = (userInput) => {
    let todos = [...this.state.todos];
    todos = [...todos, {id: todos.length + 1, task: userInput, isComplete: false}];
    this.setState({ todos });
  }

  render() {
    return (
      <div className="app-body">
        <NavBar />
        <Clock />
        <NewTodo onClearAll={this.handleClearAll} onChange={this.handleChange} onAdd={this.handleAddTodo}/>
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
