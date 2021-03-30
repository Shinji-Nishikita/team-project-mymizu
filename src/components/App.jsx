import "../styles/App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import MapContainer from "./MapContainer";
import BattleContainer from "./BattleContainer";
import StatsContainer from "./StatsContainer";

function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <MapContainer />
      <BattleContainer />
      <StatsContainer />
    </div>
  );
}

export default App;
