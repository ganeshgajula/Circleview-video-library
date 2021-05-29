import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import "../Navbar/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Circleview</h1>
        </Link>

        <SearchBar />

        <ul className="nav-list">
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
          <NavLink
            end
            to="/history"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">History</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
