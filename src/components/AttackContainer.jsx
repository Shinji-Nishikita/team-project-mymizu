import "../styles/AttackContainer.css";
import Button from './Button'
function AttackContainer() {
  const changeColor = () => { }
  return <section className="AttackContainer">
    {/* <section> */}
      <Button AttackAmount={350}/>
      <Button AttackAmount={500}/>
      <Button AttackAmount={750}/>
      {/* <button
        style={{ color: "black" }}
        onClick={(e) => {
          console.log("e.target.color", e.target)
          e.target.style.color = "red"
        }}
      >350</button>
      <button>500</button>
      <button>other</button>
    </section>
    <button
      onClick={() => { }}>Attack</button> */}
  </section>
}

export default AttackContainer;
