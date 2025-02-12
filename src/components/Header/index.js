import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "./index.css";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="header-container">
      <Link to="/" className="header-links">
        <p className="header-home">Home</p>
        <FaHome className="header-logo" />
      </Link>
      <Link to="/favorites" className="header-links">
        <p className="header-home">Favorites</p>
        <FaHeart className="header-logo-favorite" />
      </Link>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
