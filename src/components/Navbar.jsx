import React from "react";
import "../styles/Navbar.css";
// import 

function Navbar(props) {
  return (
    <header className="Nav">
      <button onClick={() => props.setUserView("Map")}>Map</button>
      <button onClick={() => props.setUserView("Battle")}>Battle</button>
      <button onClick={() => props.setUserView("Stats")}>Stats</button>
    </header>
  );
}

export default Navbar;
