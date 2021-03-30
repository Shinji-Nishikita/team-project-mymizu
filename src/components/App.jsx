import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import MapContainer from "./MapContainer";
import BattleContainer from "./BattleContainer";
import StatsContainer from "./StatsContainer";

function App() {
  const [userView, setUserView] = useState("");
  return (
    <div className="App">
      <Login />
      {console.log(userView)}
      <Navbar setUserView={setUserView} />
      {userView === "Map" && <MapContainer />}
      {userView === "Battle" && <BattleContainer />}
      {userView === "Stats" && <StatsContainer />}
    </div>
  );
}

export default App;
