import "../styles/MonsterBox.css";
import {useEffect, useState, useRef} from 'react';
import Monster from "./Monster";

function MonsterBox({userData, monsterHPs}) {
  const [monsterComp, setMonsterComp] = useState([]);
  let [currentMonster, setCurrentMonster] = useState(0)

  useEffect(()=>{
    if(monsterHPs.length < 1) return
    const temp = [];
    console.log(monsterHPs)
    for (let i = 0; i < monsterHPs.length; i++){
      const HP = monsterHPs[i]
      console.log(HP)
      temp.push(<Monster monsterHP={HP} thisMonster={i} currentMonster={currentMonster}/>)
    }
    setMonsterComp(temp)
  }, [monsterHPs])

  return (
    <section className="monsterBox">
      {monsterComp}
      <div>
        <button onClick={()=>{setCurrentMonster(currentMonster--)}}>Last</button>
        <button onClick={()=>{setCurrentMonster(currentMonster++)}}>Next</button>
      </div>
    </section>
  );
}

export default MonsterBox;
