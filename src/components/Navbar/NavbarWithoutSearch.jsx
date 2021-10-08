import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ProfileSvg } from "../ReusableSvgs";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { useAuth, useVideos } from "../../context";
import { MenuIcon } from "../../assets/svgs";
import { SideDrawer } from "..";

export const NavbarWithoutSearch = () => {
  const { token, username } = useAuth();
  const {
    data: { showSideDrawer },
    videosDispatch,
  } = useVideos();

  return (
    <>
      <nav className="navWithoutSearch">
        <div className="logoWithMenu">
          <div
            className="menuIcon"
            onClick={() => videosDispatch({ type: "OPEN_SIDE_DRAWER" })}
          >
            <MenuIcon />
          </div>

          <Link to="/">
            <img className="brand-logo" src={logo} alt="brand-logo" />
          </Link>
        </div>

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
            to="/history"
            activeStyle={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            <li className="nav-item">History</li>
          </NavLink>
          {token ? (
            <NavLink
              to="/profile"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
            >
              <li className="user-icon">
                <ProfileSvg />
                <small className="nav-item">
                  {username && `Hi, ${username}`}
                </small>
              </li>
            </NavLink>
          ) : (
            <Link to="/login">
              <li className="btn btn-sm">Login</li>
            </Link>
          )}
        </ul>

        <ul className="mobile-navlist">
          {token ? (
            <NavLink
              to="/profile"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
            >
              <li className="user-icon">
                <ProfileSvg />
                <small className="nav-item">
                  {username && `Hi, ${username}`}
                </small>
              </li>
            </NavLink>
          ) : (
            <Link to="/login">
              <li className="btn btn-sm">Login</li>
            </Link>
          )}
        </ul>
      </nav>

      {showSideDrawer && <SideDrawer />}
    </>
  );
};
