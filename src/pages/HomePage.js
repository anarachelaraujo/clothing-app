import React from "react";
import { Link } from "react-router-dom";
import "./../styles/home-page.css";
import image from "./image.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="background-image"></div>
        <div className="content">
          <h1>A New Way to Think About Clothes</h1>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
