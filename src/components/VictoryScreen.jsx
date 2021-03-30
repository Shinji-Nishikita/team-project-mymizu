import "../styles/VictoryScreen.css";

function VictoryScreen() {
  return (
    <section className="VictoryScreen">
      You Win!
      <button
        onClick={props.setView("battle")}
      >go back battle</button>
    </section>
  )
}

export default VictoryScreen;
