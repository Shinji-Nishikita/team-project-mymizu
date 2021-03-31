import React, { useState, useEffect } from "react";
import "../styles/BattleContainer.css";
import MonsterTracker from "./MonsterTracker";
import Monster from "./Monster";
import AttackContainer from "./AttackContainer";
import VictoryScreen from "./VictoryScreen";

function BattleContainer(props) {
  const [view, setView] = useState("battle");
  const [numAlive, setNumAlive] = useState();
  const [numDead, setNumDead] = useState();

  useEffect(() => {
    if (props.userData !== undefined) {
      if (props.userData.monster.maxHP === props.userData.monster.currentHP) {
        setNumAlive(props.userData.level);
        setNumDead(0);
      }
    }
  }, [props.userData]);

  return (
    <section className="BattleContainer">
      battle container
      {view === "battle" && (
        <section>
          <MonsterTracker numAlive={numAlive} numDead={numDead} />
          <Monster userData={props.userData} />
          <AttackContainer userData={props.userData} setView={setView} />
        </section>
      )}
      {view === "victory" && <VictoryScreen setView={setView} />}
    </section>
  );
}

export default BattleContainer;
