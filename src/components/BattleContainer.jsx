import React, { useState, useEffect } from "react";
import "../styles/BattleContainer.css";
import MonsterTracker from "./MonsterTracker";
import MonsterBox from "./MonsterBox";
import AttackContainer from "./AttackContainer";
import VictoryScreen from "./VictoryScreen";

function BattleContainer(props) {
  const [view, setView] = useState("battle");
  const [numAlive, setNumAlive] = useState();
  const [numDead, setNumDead] = useState();
  const [monsterHPs, setMonsterHPs] = useState([]);
  const [newTotalHP, setNewTotalHP] = useState(0);

  useEffect(() => {
    if (props.userData !== undefined) {
      let previousHP = 0;
      let temp0 = [];
      for (let i = 0; i < props.userData.level; i++) {
        let newHP = previousHP + 25;
        previousHP = newHP;
        temp0.push(newHP);
      }

      if (props.userData.monster.maxHP !== props.userData.monster.currentHP) {
        const temp = temp0.map((mon) => mon);
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

        if (temp.length > 0) {
          let alive = 0;
          let dead = 0;
          for (const monster of temp) {
            if (monster === 0) {
              dead++;
            } else {
              alive++;
            }
          }
          setNumAlive(alive);
          setNumDead(dead);
          setMonsterHPs(temp);
        }
      } else {
        setMonsterHPs(temp0);
        setNumDead(0);
        setNumAlive(props.userData.level);
      }
    }
  }, [props.userData, view, props.userView]);

  useEffect(() => {
    const temp = monsterHPs.map((mon) => mon);
    let HPpreAttack = 0;
    monsterHPs.forEach((hp) => {
      HPpreAttack += hp;
    });
    let remainingDamage = HPpreAttack - newTotalHP;
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

    if (temp.length > 0) {
      let alive = 0;
      let dead = 0;
      for (const monster of temp) {
        if (monster === 0) {
          dead++;
        } else {
          alive++;
        }
      }
      setNumAlive(alive);
      setNumDead(dead);
      setMonsterHPs(temp);
    }
  }, [newTotalHP]);

  return (
    <section className="BattleContainer">
      {view === "battle" && (
        <section>
          <p className="battleText">Oh no! Plasforms!</p>
          <p className="battleText">
            Refill your water bottle so they have less plastic!
          </p>
          <MonsterTracker numAlive={numAlive} numDead={numDead} />
          <MonsterBox userData={props.userData} monsterHPs={monsterHPs} />
          <AttackContainer
            userData={props.userData}
            setUserData={props.setUserData}
            setView={setView}
            setNewTotalHP={setNewTotalHP}
          />
        </section>
      )}
      {view === "victory" && (
        <VictoryScreen
          view={view}
          setView={setView}
          userData={props.userData}
          setUserData={props.setUserData}
          setMonsterHPs={setMonsterHPs}
          setNumAlive={setNumAlive}
          setNumDead={setNumDead}
        />
      )}
    </section>
  );
}

export default BattleContainer;
