import React from "react";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  // JavaScript Object Destructuring
  const { user, resetPassword, error } = useAuth();

  return (
    <div className="container">
      <div className="user-profile">
        <img src={user.photoURL} alt="" />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
        <p>{error}</p>
        <button onClick={resetPassword} className="btn nav-fancy ms-2">
          Reset Password
        </button>
      </div>
    </div>
  );
}
