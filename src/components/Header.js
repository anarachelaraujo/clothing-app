import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/addClothes">Add Pieces</Link>
          </li>
          <li>
            <Link to="/table">List</Link>
          </li>
          <li>
            <Link to="/combine">Combine</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
