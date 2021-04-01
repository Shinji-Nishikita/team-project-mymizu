import "../styles/VictoryScreen.css";
import axios from "axios";

function VictoryScreen(props) {
  const handleClick = async () => {
    await axios
      .get(process.env.REACT_APP_URL + "/user/" + props.userData.username)
      .then((x) => {
        props.setUserData(x.data);
      });
    props.setView("Battle");
    props.setMonsterHPs([]);
  };

  return (
    <section className="VictoryScreen">
      <br></br>
      You defeated the Plasforms!
      <br></br>
      <br></br>
      LEVEL UP!
      <br></br>
      <br></br>
      And yet their numbers still grow...
      <br></br>
      <button onClick={handleClick}>Continue the Fight!</button>
    </section>
  );
}

export default VictoryScreen;
