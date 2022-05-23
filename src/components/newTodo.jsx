import React from "react";
import "../styles.css";

function NewTodo(props) {
  const { onClearAll, onChange, onAdd } = props;
  return (
    <React.Fragment>
      <div className="m-2 p-2">
        <input
          className="new-todo form-control-lg m-2"
          type="text"
          placeholder="What do I need to do?"
          onChange={onChange}
        ></input>
        <input
          className="btn-new-todo btn btn-primary m-2"
          type="submit"
          value="Add"
          onClick={onAdd}
        ></input>
        <input
          className="btn-clear-completed-todos btn btn-success m-2"
          type="submit"
          value="Clear Completed"
        ></input>
        <input
          className="btn-clear-all-todos btn btn-danger m-2"
          type="submit"
          value="Clear All"
          onClick={onClearAll}
        ></input>
      </div>
    </React.Fragment>
  );
}

export default NewTodo;
