import React from "react";
import "../styles.css";

function Todo(props) {
  return (
    <React.Fragment>
      <div>
        <span className="form-check-label m-2">{props.task}</span>
        <input
          className="form-check-input m-2"
          type="checkbox"
          onChange={() => props.onComplete(props.todo)}
          checked={props.todo.isComplete}
        ></input>
      </div>
    </React.Fragment>
  );
}

export default Todo;
