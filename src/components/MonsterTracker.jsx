import "../styles/MonsterTracker.css";

function MonsterTracker(props) {
  //console.log("tracker", props);
  const lifeElems = [];
  if (props.numDead === 0) {
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(<span className="lifedot" key={"lifedot" + i}></span>);
    }
  } else {
    for (let i = 0; i < props.numDead; i++) {
      lifeElems.push(<span className="deathdot" key={"deathdot" + i}></span>);
    }
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(<span className="lifedot" key={"lifedot" + i}></span>);
    }
  }

  return <section className="MonsterTracker">{lifeElems}</section>;
}

export default MonsterTracker;
