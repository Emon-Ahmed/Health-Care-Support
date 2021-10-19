import React from "react";

export default function signup() {
  return (
    <div>
      <div>
        <div>
          <input
            onBlur={handleEmail}
            placeholder="Email"
            className="input-box"
            type="email"/>
          <br />
          <input
            onBlur={handlePassword}
            placeholder="Password"
            className="input-box"
            type="password"/>
          <br />
          <input
            onClick={signInwithEmail}
            className="btn"
            type="submit"
            value="Login"/>
          <input
            onClick={resetPassword}
            className="btn"
            type="submit"
            value="Reset Password"/>
        </div>
        <hr />
        <button className="btn" onClick={signInGoogle}>
          Login With Google
        </button>
        <button className="btn" onClick={signInGithub}>
          Login With Github
        </button>
      </div>
    </div>
  );
}
