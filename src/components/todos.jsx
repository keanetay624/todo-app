import React from "react";
import Todo from "./todo";
import "../styles.css";

function Todos(props) {
  const { todos, onComplete } = props;
  return (
    <div id="todos-container" className="m-5 p-2">
      {todos.length === 0 ? (
        <p>No outstanding tasks, add a new task above!</p>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            onComplete={onComplete}
            todo={todo}
          />
        ))
      )}
    </div>
  );
}

export default Todos;
