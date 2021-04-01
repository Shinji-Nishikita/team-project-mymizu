import React from "react";
import img from "../img/plastic_monster.png";
export default function Monster({ monsterHP, currentMonster, thisMonster, monsterHPs }) {
  const percent = (monsterHP /monsterHPs[monsterHPs.length - 1 ]) * 100
  if (currentMonster === thisMonster) {
    return (
      <>
      <div>
        <img
          src={img}
          className="img"
          height={percent + "vh"}
          alt="monster"
        />
      </div>
      {monsterHP === 0 && <div>DEAD</div>}
      </>
    );
  } else return null;
}
