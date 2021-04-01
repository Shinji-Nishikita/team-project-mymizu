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
    if (!userID) return;
    async function getInfo() {
      await axios
        .get(process.env.REACT_APP_URL + "/user/" + userID)
        .then((x) => {
          setUserData(x.data);
        });
    }
    getInfo();
  }, [userID]);

  return (
    <div className="App">
      {userID === "" ? (
        <Login setUserID={setUserID} />
      ) : (
        <section>
          <Navbar setUserView={setUserView} />
          {userView === "Map" && <MapContainer user={userID} />}
          {userView === "Battle" && (
            <BattleContainer
              userData={userData}
              setUserData={setUserData}
              userView={userView}
              setUserView={setUserView}
            />
          )}
          {userView === "Stats" && <StatsContainer userData={userData} />}
          <footer className="foot">
            Skull & Monster Face icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            || Plastic Monster image sourced from{" "}
            <a href="https://www.h0rse.com/greenpeace-plastic-monster/">
              h0rse/greenpeace
            </a>
          </footer>
        </section>
      )}
    </div>
  );
}

export default App;
