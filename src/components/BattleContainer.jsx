import "../styles/BattleContainer.css";
import MonsterTracker from "./MonsterTracker";
import Monster from "./Monster";
import AttackContainer from "./AttackContainer";
import VictoryScreen from "./VictoryScreen";

function BattleContainer() {
  const [view, setView] = useState("battle");

  //when onclick in attackContainer


  return (
    <section className="BattleContainer">
      battle container
      {view === "battle" &&
        <>
          <MonsterTracker />
          <Monster />
          <AttackContainer view={view} setView={setView} />
        </>
      }
      {view === "victory" &&
        <VictoryScreen setView={setView} />
      }
    </section>
  );
}

export default BattleContainer;
