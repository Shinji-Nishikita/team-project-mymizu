import "../styles/AttackContainer.css";

function AttackContainer() {
  const changeColor = () => { }
  return <section className="AttackContainer">
    <section>
      <button
        style={{ color: "black" }}
        onClick={(e) => {
          console.log("e.target.color", e.target)
          e.target.style.color = "red"
        }}
      >350</button>
      <button>500</button>
      {/* <button>other</button> */}
    </section>
    <button
      onClick={() => { }}>Attack</button>
  </section>;
}

export default AttackContainer;
