import React, { useState } from "react";
import axios from "axios";
import "../styles/AttackContainer.css";
import Button from "./Button";
function AttackContainer(props) {
  const [size, setSize] = useState(null);

  const attack = async (e) => {
    console.log("current size", size);
    // patch
    let attackUrl =
      process.env.REACT_APP_URL +
      "/user/" +
      props.userData.username +
      "/attack";
    const req = await axios.patch(attackUrl, {
      size: size,
    });
    console.log("response:", req.data);
    if (req.data.msg.includes("defeated")) {
      props.setNewTotalHP(0);
    } else {
      props.setNewTotalHP(req.data.monsterHP);
    }
  };

  return (
    <section className="AttackContainer">
      <section>
        {"H20 Refill power (ml)"}
        <br></br>
        <Button AttackAmount={350} setSize={setSize} />
        <Button AttackAmount={500} setSize={setSize} />
        <Button AttackAmount={750} setSize={setSize} />
      </section>
      <button className="attackButton" onClick={(e) => attack(e)}>
        H20 Refill Attack
      </button>
    </section>
  );
}

export default AttackContainer;
