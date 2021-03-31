import React, { useState, useEffect } from "react";
import "../styles/BattleContainer.css";
import MonsterTracker from "./MonsterTracker";
import Monster from "./Monster";
import AttackContainer from "./AttackContainer";
import VictoryScreen from "./VictoryScreen";

function BattleContainer(props) {
  const [view, setView] = useState("battle");
  const [numAlive, setNumAlive] = useState();
  const [numDead, setNumDead] = useState(0);

  useEffect(() => {
    if (props.userData !== undefined) {
      setNumAlive(props.userData.level);
    }
  }, [props.userData]);

  return (
    <section className="BattleContainer">
      battle container
      {view === "battle" && (
        <section>
          <MonsterTracker numAlive={numAlive} numDead={numDead} />
          <Monster />
          <AttackContainer />
        </section>
      )}
      {view === "victory" && <VictoryScreen setView={setView} />}
    </section>
  );
}

export default BattleContainer;
