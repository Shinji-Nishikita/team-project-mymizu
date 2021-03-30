import React from "react";
import "../styles/BattleContainer.css";
import MonsterTracker from "./MonsterTracker";
import Monster from "./Monster";
import AttackContainer from "./AttackContainer";
import VictoryScreen from "./VictoryScreen";

function BattleContainer(props) {
  return (
    <section className="BattleContainer">
      battle container
      <MonsterTracker />
      <Monster />
      <AttackContainer />
      <VictoryScreen />
    </section>
  );
}

export default BattleContainer;
