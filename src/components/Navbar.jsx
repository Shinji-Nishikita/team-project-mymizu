import React from "react";
import "../styles/Navbar.css";
// import 

function Navbar(props) {
  return (
    <header className="Nav">
      <button className="navbutton" onClick={() => props.setUserView("Map")}>Map</button>
      <button className="navbutton" onClick={() => props.setUserView("Battle")}>Battle</button>
      <button className="navbutton" onClick={() => props.setUserView("Stats")}>Stats</button>
    </header>
  );
}

export default Navbar;
