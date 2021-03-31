import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import MapContainer from "./MapContainer";
import BattleContainer from "./BattleContainer";
import StatsContainer from "./StatsContainer";

function App() {
  const [userID, setUserID] = useState("");
  const [userView, setUserView] = useState("");

  return (
    <div className="App">
      {userID === "" ? (
        <Login setUserID={setUserID} />
      ) : (
        <section>
          <Navbar setUserView={setUserView} />
          {userView === "Map" && <MapContainer user={userID}/>}
          {userView === "Battle" && <BattleContainer />}
          {userView === "Stats" && <StatsContainer />}
        </section>
      )}
    </div>
  );
}

export default App;
