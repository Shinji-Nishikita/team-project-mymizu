import React from "react";
import img from "../img/plastic_monster.png";
export default function Monster({ monsterHP, currentMonster, thisMonster, monsterHPs }) {
  const percent = (monsterHPs[thisMonster] / monsterHP) * 100
  if (currentMonster === thisMonster) {
    return (
      <>
      <div>
        <img
          src={img}
          className="img"
          height={monsterHP + "px"}
          alt="monster"
        />
      </div>
      {/* {monsterHP > 0 && <div style={{backgroundColor:'purple', height: "20px", width:`${percent + "%"}` }}></div>} */}
      {monsterHP === 0 && <div>DEAD</div>}
      </>
    );
  } else return null;
}

// add X over image if HP is 0