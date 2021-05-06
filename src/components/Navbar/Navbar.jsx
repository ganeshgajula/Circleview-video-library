import React from "react";
import "../Navbar/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>finview</h1>

        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Explore</li>
          <li className="nav-item">Liked videos</li>
          <li className="nav-item">Watch later</li>
          <li className="nav-item">Playlist</li>
        </ul>
      </nav>
    </>
  );
};
