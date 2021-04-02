import React from "react";
import img from "../img/plastic_monster.png";
import dead from'../img/plastic_monster - dead.png';
import '../styles/Monster.css'
export default function Monster({ monsterHP, currentMonster, thisMonster, monsterHPs }) {
  const percent = (monsterHP /monsterHPs[monsterHPs.length - 1 ]) * 100
  console.log(img)
  console.log(img.height)
  if (currentMonster === thisMonster) {
    return (
      <>
      {monsterHP > 0 && 
      <div style={{height:'400px'}}>
          <img
          src={img}
          className="img"
          style={{objectFit:'cover'}}
          width={percent + "%"}
          alt="monster"
          />
      </div>}
      {monsterHP === 0 && 
      <div style={{height:'400px'}}>
        <img
          src={dead}
          className="img"
          width={"100%"}
          alt="monster"
        />
      </div>}
      </>
    );
  } else return null;
}
