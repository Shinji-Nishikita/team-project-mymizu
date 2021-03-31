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
  const [monsterHPs, setMonsterHPs] = useState([]);

  useEffect(() => {
    if (props.userData !== undefined) {
      let previousHP = 0;
      for (let i = 0; i < props.userData.level; i++) {
        let newHP = previousHP + 25;
        previousHP = newHP;
        monsterHPs.push(newHP);
      }
      setNumDead(0);
      setNumAlive(props.userData.level);

      if (props.userData.monster.maxHP !== props.userData.monster.currentHP) {
        const temp = monsterHPs.map((mon) => mon);
        let remainingDamage =
          props.userData.monster.maxHP - props.userData.monster.currentHP;
        for (let i = 0; i < temp.length; i++) {
          temp[i] = temp[i] - remainingDamage;
          if (temp[i] >= 0) {
            remainingDamage = 0;
            break;
          }
          if (temp[i] < 0) {
            remainingDamage = temp[i] * -1;
            temp[i] = 0;
          }
        }
        setMonsterHPs(temp);
      }
    }
  }, [props.userData]);

  useEffect(() => {
    let alive = 0;
    let dead = 0;
    for (const monster of monsterHPs) {
      if (monster === 0) {
        dead++;
      } else {
        alive++;
      }
    }
    setNumAlive(alive);
    setNumDead(dead);
  }, [monsterHPs.length]);

  console.log("alive", numAlive, "dead", numDead);

  console.log(monsterHPs);

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
