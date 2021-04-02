import React from "react";
import img from "../img/plastic_monster.png";
import dead from'../img/plastic_monster - dead.png';
import '../styles/Monster.css'

export default function Monster({ monsterHP, currentMonster, thisMonster, monsterHPs }) {
  const percent = (monsterHP /monsterHPs[monsterHPs.length - 1 ]) * 100
  if (currentMonster === thisMonster) {
    return (
      <>
       
      <div style={{height:'400px'}}>
        <div style={{fontSize:'large', fontFamily:"fantasy", color:'red'}}>
        Current HP: {monsterHP}
        </div>
     <img
          src={percent === 0 ? dead : img}
          className="img"
          style={{objectFit:'cover'}}
          width={percent !== 0 ? percent + "%" : "50%"}
          alt="monster"
          />
      </div>
      </>
    );
  } else return null;
}
