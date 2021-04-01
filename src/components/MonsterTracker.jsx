import "../styles/MonsterTracker.css";

function MonsterTracker(props) {
  const lifeElems = [];
  if (props.numDead === 0) {
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(<span className="lifedot" key={"lifedot" + (i + 100 * 7 / 13)}></span>);
    }
  } else {
    for (let i = 0; i < props.numDead; i++) {
      lifeElems.push(<span className="deathdot" key={"deathdot" + (i + 100 * 7 / 13)}></span>);
    }
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(<span className="lifedot" key={"lifedot" + (i + 100 * 7 / 13)}></span>);
    }
  }

  return <section className="MonsterTracker">{lifeElems}</section>;
}

export default MonsterTracker;
