import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

function Login(props) {
  const [needAccount, setNeedAccount] = useState(false);
  let user = "";
  const setUser = (e) => {
    user = e.target.value;
  };
  const handleSignIn = async () => {
    const req = await axios.post(process.env.REACT_APP_URL + "/login", {
      username: user,
    });

    if (req.data.msg.includes("mizu")) {
      setNeedAccount(true);
    } else {
      props.setUserID(user);
    }
  };
  return (
    <section className="Login">
      <h2 className="appName">BlasMizu</h2>
      <input
        type="text"
        placeholder="enter your user name"
        className="username"
        onKeyUp={setUser}
      ></input>
      <br></br>
      <button className="signIn" onClick={handleSignIn}>
        Tap to start
      </button>
      <br></br>
      <p className="controller">🎮</p>
      {needAccount && (
        <p className="accountAlert">
          You must log in with an existing mymizu username.
          <br></br>
          Don't have a mymizu account? ➡ Create one{" "}
          <a href="https://account.mymizu.co/register?r=">here</a>
        </p>
      )}
    </section>
  );
}

export default Login;
