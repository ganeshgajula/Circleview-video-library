import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { ProfileSvg } from "../ReusableSvgs";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { useAuth } from "../../context";
import { MenuIcon } from "../../assets/svgs";

export const Navbar = () => {
  const { token, username } = useAuth();

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img className="brand-logo" src={logo} alt="brand-logo" />
        </Link>

        <SearchBar />

        <ul className="nav-list">
          <NavLink
            to="/explore"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="nav-item">Explore</li>
          </NavLink>
          <NavLink
            to="/likedvideos"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="nav-item">Liked videos</li>
          </NavLink>
          <NavLink
            to="/watchlater"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="nav-item">Watch later</li>
          </NavLink>
          <NavLink
            to="/playlist"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <li className="nav-item">Playlist</li>
          </NavLink>
          <NavLink
            to="/history"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
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
                <small>{username && `Hi, ${username}`}</small>
              </li>
            </NavLink>
          ) : (
            <Link to="/login">
              <li className="btn btn-sm">Login</li>
            </Link>
          )}
        </ul>
      </nav>

      <nav className="tabletNavbar">
        <div className="logoWithNavlists">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="brand-logo" />
          </Link>

          <ul className="nav-list">
            <NavLink
              to="/explore"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
            >
              <li className="nav-item">Explore</li>
            </NavLink>
            <NavLink
              to="/likedvideos"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
            >
              <li className="nav-item">Liked videos</li>
            </NavLink>
            <NavLink
              to="/watchlater"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
            >
              <li className="nav-item">Watch later</li>
            </NavLink>
            <NavLink
              to="/playlist"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
            >
              <li className="nav-item">Playlist</li>
            </NavLink>
            <NavLink
              to="/history"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
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
                  <small>{username && `Hi, ${username}`}</small>
                </li>
              </NavLink>
            ) : (
              <Link to="/login">
                <li className="btn btn-sm">Login</li>
              </Link>
            )}
          </ul>
        </div>
        <SearchBar />
      </nav>

      <nav className="mobileNavbar">
        <div className="navContainer">
          <div className="logoWithMenu">
            <div className="menuIcon">
              <MenuIcon />
            </div>

            <Link to="/">
              <img className="brand-logo" src={logo} alt="brand-logo" />
            </Link>
          </div>
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
        </div>
        <SearchBar />
      </nav>
    </>
  );
};
