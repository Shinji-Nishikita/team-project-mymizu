import "../styles/MonsterBox.css";
import { useState, useEffect } from "react";
import Monster from "./Monster";
import { v4 as uuidv4 } from "uuid";

function MonsterBox({ monsterHPs }) {
  let [currentMonster, setCurrentMonster] = useState(0);

  function changeMonster(e) {
    if (e.target.innerText === "Previous Monster") {
      setCurrentMonster(--currentMonster);
    } else {
      setCurrentMonster(++currentMonster);
    }
  }

  useEffect(() => {
    let i = 0;
    while (monsterHPs[i] === 0) {
      i++;
    }
    setCurrentMonster(i);
  }, [monsterHPs]);

  return (
    <section className="monsterBox" style={{ width: "100%", objectFit:'fill'}}>
      {monsterHPs.map((v, i) => (
        <Monster
          monsterHP={v}
          currentMonster={currentMonster}
          thisMonster={i}
          key={uuidv4()}
          monsterHPs={monsterHPs}
        />
      ))}
      <div>
        {currentMonster > 0 && (
          <button
            className="changeMonButton"
            onMouseUp={(e) => {
              changeMonster(e);
            }}
          >
            Previous Monster
          </button>
        )}
        {currentMonster < monsterHPs.length - 1 && (
          <button
            className="changeMonButton"
            onMouseUp={(e) => {
              changeMonster(e);
            }}
          >
            Next Monster
          </button>
        )}
      </div>
    </section>
  );
}

export default MonsterBox;
