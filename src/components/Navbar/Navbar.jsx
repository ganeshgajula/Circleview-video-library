import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>finview</h1>

        <ul className="nav-list">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/explore">
            <li className="nav-item">Explore</li>
          </Link>
          <Link to="/likedvideos">
            <li className="nav-item">Liked videos</li>
          </Link>
          <Link to="/watchlater">
            <li className="nav-item">Watch later</li>
          </Link>
          <Link to="/playlist">
            <li className="nav-item">Playlist</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
