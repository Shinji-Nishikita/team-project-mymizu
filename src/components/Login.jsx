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
    // console.log(req);
    props.setUserID(user);
  };
  return (
    <section className="Login">
      login
      <input type="text" className="username" onKeyUp={setUser}></input>
      <button className="signIn" onClick={handleSignIn}>
        Sign In
      </button>
    </section>
  );
}

export default Login;
