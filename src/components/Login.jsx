import "../styles/Login.css";

function Login(props) {
  let user = "";
  const setUser = (e) => {
    user = e.target.value;
  };
  const handleSignIn = () => {
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
