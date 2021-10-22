import React from "react";
import { CloseIcon } from "../../assets/svgs";
import "./SideDrawer.css";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useAuth, useVideos } from "../../context";

export const SideDrawer = () => {
  const { token, logoutUser } = useAuth();
  const { videosDispatch } = useVideos();

  return (
    <div className="sideDrawer-outerContainer">
      <div className="sideDrawer-container">
        <div className="sideHeader">
          <Link to="/">
            <img className="mobile-brand-logo" src={logo} alt="brand-logo" />
          </Link>
          <span onClick={() => videosDispatch({ type: "CLOSE_SIDE_DRAWER" })}>
            <CloseIcon />
          </span>
        </div>

        <ul className="mobile-NavList">
          <NavLink
            to="/explore"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="mobile-NavItem">Explore</li>
          </NavLink>
          <NavLink
            to="/likedvideos"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="mobile-NavItem">Liked videos</li>
          </NavLink>
          <NavLink
            to="/watchlater"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="mobile-NavItem">Watch later</li>
          </NavLink>
          <NavLink
            to="/playlist"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="mobile-NavItem">Playlist</li>
          </NavLink>
          <NavLink
            to="/history"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="mobile-NavItem">History</li>
          </NavLink>
          {token ? (
            <li className="mobile-NavItem logout-nav" onClick={logoutUser}>
              Logout
            </li>
          ) : (
            <NavLink to="/login">
              <li className="mobile-NavItem">Login</li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};
