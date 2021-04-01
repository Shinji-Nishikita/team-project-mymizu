import "../styles/MonsterTracker.css";
import skull from "../img/skull.svg";
import devil from "../img/devil.svg";

function MonsterTracker(props) {
  const lifeElems = [];
  if (props.numDead === 0) {
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(
        <img
          alt="monster face"
          className="lifedot"
          key={"lifedot" + (i + (100 * 7) / 13)}
          src={devil}
        ></img>
      );
    }
  } else {
    for (let i = 0; i < props.numDead; i++) {
      lifeElems.push(
        <img
          alt="monster face"
          className="deathdot"
          key={"deathdot" + (i + (100 * 7) / 13)}
          src={skull}
        ></img>
      );
    }
    for (let i = 0; i < props.numAlive; i++) {
      lifeElems.push(
        <img
          alt="monster face"
          className="lifedot"
          key={"lifedot" + (i + (1000 * 7) / 13)}
          src={devil}
        ></img>
      );
    }
  }
  return <section className="MonsterTracker">{lifeElems}</section>;
}

export default MonsterTracker;
