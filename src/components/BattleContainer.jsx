import React, { useState, useEffect } from "react";
import "../styles/BattleContainer.css";
import MonsterTracker from "./MonsterTracker";
import Monster from "./Monster";
import AttackContainer from "./AttackContainer";
import VictoryScreen from "./VictoryScreen";

function BattleContainer() {
  const [numAlive, setNumAlive] = useState();
  const [numDead, setNumDead] = useState();

  return (
    <section className="BattleContainer">
      battle container
      <MonsterTracker numAlive={numAlive} numDead={numDead} />
      <Monster />
      <AttackContainer />
      <VictoryScreen />
    </section>
  );
}

export default BattleContainer;
