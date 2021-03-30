import React, { useState } from "react";
import "../styles/App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import MapContainer from "./MapContainer";
import BattleContainer from "./BattleContainer";
import StatsContainer from "./StatsContainer";

function App() {
  const [userID, setUserID] = useState("");

  return (
    <div className="App">
      {userID === "" ? (
        <Login setUserID={setUserID} />
      ) : (
        <section>
          <Navbar />
          <MapContainer />
          <BattleContainer userID={userID} />
          <StatsContainer userID={userID} />
        </section>
      )}
    </div>
  );
}

export default App;
