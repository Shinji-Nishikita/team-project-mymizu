import axios from "axios";
import "../styles/Login.css";

function Login(props) {
  let user = "";
  const setUser = (e) => {
    user = e.target.value;
  };
  const handleSignIn = async () => {
    const req = await axios.post(process.env.REACT_APP_URL + "/login", {
      username: user,
    });
    props.setUserID(user);
  };
  return (
    <section className="Login">
      <input
        type="text"
        placeholder="enter your user name"
        className="username"
        onKeyUp={setUser}
      ></input>
      <button className="signIn" onClick={handleSignIn}>
        <p>Tap to start 🎮</p>
      </button>
    </section>
  );
}

export default Login;
