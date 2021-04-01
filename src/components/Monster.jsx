import React from "react";
import img from "../img/plastic_monster.png";
import MonsterHP from "./MonsterHP";
export default function Monster({ monsterHP, currentMonster, thisMonster }) {
  return (
    <div>
      {thisMonster === currentMonster && <img src={img} className="img" height={ monsterHP +'px'} alt="monster" />}
      {/* <div height="20px" width="100%" style={{ backgroundColor: "purple" }}> */}
      {monsterHP}
      {/* </div> */}
    </div>
  )
}
