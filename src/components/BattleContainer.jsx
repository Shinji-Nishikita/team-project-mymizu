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
    console.log("user data battle line 16", props.userData);
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
          console.log("temp", temp);
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
          console.log("num alive", numAlive);
          console.log("num dead", numDead);
        }
      } else {
        setMonsterHPs(temp0);
        setNumDead(0);
        setNumAlive(props.userData.level);
      }
    }
  }, [props.userData, view, props.userView]);
  console.log("num alive", numAlive);
  console.log("num dead", numDead);

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
      console.log("temp", temp);
      for (const monster of temp) {
        if (monster === 0) {
          dead++;
          console.log("deaddd", dead);
        } else {
          alive++;
          console.log("aliiiive", alive);
        }
      }
      console.log("a", alive);
      console.log("d", dead);
      setNumAlive(alive);
      setNumDead(dead);
      setMonsterHPs(temp);
      console.log("battle use effect line 90");
    }
  }, [newTotalHP]);

  console.log("num alive", numAlive);
  console.log("num dead", numDead);
  // console.log("the HPs", monsterHPs);
  // console.log("user info", props.userData);
  // console.log("remainingHP:", newTotalHP);
  //console.log("current battle view:", view);

  return (
    <section className="BattleContainer">
      {view === "battle" && (
        <section>
          Oh no! Plasforms!
          <br></br>
          Refill your water bottle so they have less plastic!
          <br></br>
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
