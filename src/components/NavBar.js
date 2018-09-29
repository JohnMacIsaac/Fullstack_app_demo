import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/items">
        <div>Items</div>
      </Link>
    </div>
  );
}

export default NavBar;
