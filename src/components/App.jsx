import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import MapContainer from "./MapContainer";
import BattleContainer from "./BattleContainer";
import StatsContainer from "./StatsContainer";
import axios from "axios";

function App() {
  const [userID, setUserID] = useState("");
  const [userView, setUserView] = useState("Battle");
  const [userData, setUserData] = useState();

  useEffect(() => {
    if(!userID) return
    async function getInfo() {
      await axios
        .get(process.env.REACT_APP_URL + "/user/" + userID)
        .then((x) => {
          setUserData(x.data);
        });
    }
    getInfo();
  }, [userID]);
  // console.log(userData);

  return (
    <div className="App">
      {userID === "" ? (
        <Login setUserID={setUserID} />
      ) : (
        <section>
          <Navbar setUserView={setUserView} />
          {userView === "Map" && <MapContainer user={userID}/>}
          {userView === "Battle" && <BattleContainer userData={userData} />}
          {userView === "Stats" && <StatsContainer userData={userData} />}
        </section>
      )}
    </div>
  );
}

export default App;
