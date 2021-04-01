import "../styles/MonsterBox.css";
import {useState} from 'react';
import Monster from "./Monster";

function MonsterBox({ monsterHPs}) {
  let [currentMonster, setCurrentMonster] = useState(0)

  return (
    <section className="monsterBox">
      {monsterHPs.map((v,i)=> <Monster monsterHP={v} currentMonster={currentMonster} thisMonster={i} key={v} monsterHPs={monsterHPs}/>)}
      <div>
        <button onMouseUp={()=>{setCurrentMonster(currentMonster--)}}>Last</button>
        <button onMouseUp={()=>{setCurrentMonster(currentMonster++)}}>Next</button>
      </div>
    </section>
  );
}

export default MonsterBox;
