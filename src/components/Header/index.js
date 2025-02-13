import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import "./index.css";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
  return (
    <div className="header-container">
      <Link to="/" className="header-links">
        <p className="header-home">
          <FaGithubSquare className="git-logo" /> Github
        </p>
        <FaHome className="header-logo" />
      </Link>
      <Link to="/favorites" className="header-links">
        <p className="header-home">
          <FaHeart className="header-logo-favorite2" />
          Favorites
        </p>
        <FaHeart className="header-logo-favorite" />
      </Link>
      <button onClick={() => setDarkMode(!darkMode)} className="light-dark-mode-btn">
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
