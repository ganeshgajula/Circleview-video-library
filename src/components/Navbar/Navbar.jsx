import React from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Circleview</h1>

        <ul className="nav-list">
          <NavLink
            end
            to="/"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink
            to="/explore"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">Explore</li>
          </NavLink>
          <NavLink
            to="/likedvideos"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">Liked videos</li>
          </NavLink>
          <NavLink
            to="/watchlater"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">Watch later</li>
          </NavLink>
          <NavLink
            to="/playlist"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">Playlist</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
