import "../styles/MonsterTracker.css";

function MonsterTracker(props) {
  const lifeElems = [];
  if (props.numDead === 0) {
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(<span className="lifedot"></span>);
    }
  } else {
    for (let i = 0; i < props.numDead; i++) {
      lifeElems.push(<span className="deathdot"></span>);
    }
    for (let i = 0; i < props.numDead; i++) {
      lifeElems.push(<span className="deathdot"></span>);
    }
  }

  return (
    <section className="MonsterTracker">
      <span className="lifedot"></span>
      <span className="deathdot"></span>
      {lifeElems}
    </section>
  );
}

export default MonsterTracker;
