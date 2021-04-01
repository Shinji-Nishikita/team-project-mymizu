import "../styles/MonsterBox.css";
import {useState} from 'react';
import Monster from "./Monster";

function MonsterBox({ monsterHPs}) {
  let [currentMonster, setCurrentMonster] = useState(0)

  function changeMonster(e){
    if (e.target.innerText === 'Previous'){
      setCurrentMonster(--currentMonster)
    } else {
      setCurrentMonster(++currentMonster)
    }
  }

  return (
    <section className="monsterBox">
      {monsterHPs.map((v,i)=> <Monster monsterHP={v} currentMonster={currentMonster} thisMonster={i} key={v} monsterHPs={monsterHPs}/>)}
      <div>
        {currentMonster > 0 && <button onMouseUp={(e)=>{changeMonster(e)}}>Previous</button>}
        {currentMonster < monsterHPs.length -1 && <button onMouseUp={(e)=>{changeMonster(e)}}>Next</button>}
      </div>
    </section>
  );
}

export default MonsterBox;
