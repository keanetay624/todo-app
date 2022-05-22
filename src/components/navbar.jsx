import React from "react";
import "../styles.css";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand p-1" href=".">
          Keane's Todos
        </a>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
