import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthProvider";
import { Navbar } from "../../components";
import { updateUserProfile } from "../../utils";
import "./Profile.css";

export const Profile = () => {
  const { userId, username, lastname, logoutUser, setUsername, setLastname } =
    useAuth();

  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const [firstName, setFirstName] = useState(username);
  const [lastName, setLastName] = useState(lastname);

  useEffect(() => {
    (async () => {
      setStatus("loading");
      try {
        const {
          status,
          data: { user },
        } = await axios.get(`http://localhost:4000/users/${userId}`);

        if (status === 200) {
          setUser(user);
          setStatus("success");
        }
      } catch (error) {
        setStatus("error");
        toast.error(error.response.data.errorMessage, {
          position: "bottom-center",
          autoClose: 2000,
        });
      }
    })();
  }, [userId]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    updateUserProfile(userId, firstName, lastName, setUsername, setLastname);
  };

  return (
    <>
      <Navbar />
      <div className="profile-details">
        <div className="profile-header">
          <h1 className="profile-title">Account Details</h1>
          <button className="logout-btn btn-sm" onClick={logoutUser}>
            Logout
          </button>
        </div>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && (
          <div className="edit-data">
            <h2 className="edit-heading">Edit Profile</h2>
            <form className="updateInfo" onSubmit={updateProfileHandler}>
              <div className="userFullName">
                <div className="inputFields mr-3">
                  <label htmlFor="firstname">firstname</label>
                  <input
                    className="form-input"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="inputFields">
                  <label htmlFor="lastname">lastname</label>
                  <input
                    className="form-input"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="inputFields mt-05 mb-1">
                <p className="email-title">email</p>
                <p className="email">{user?.email}</p>
              </div>
              <button type="submit" className="btn-sm btn-primary">
                Save
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
