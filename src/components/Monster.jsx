import "../styles/Monster.css";
import MonsterHP from "./MonsterHP";

import img from "../img/plastic_monster.png";

function Monster(props) {
  return (
    <section className="monster">
      <img src={img} className="img" />
      <MonsterHP userData={props.userData} />
    </section>
  );
}

export default Monster;
