import React, { useState } from "react";
import axios from "axios";
import "../styles/AttackContainer.css";
import Button from "./Button";

axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_API_KEY;

function AttackContainer(props) {
  const [size, setSize] = useState(null);

  const attack = async (e) => {
    let attackUrl =
      process.env.REACT_APP_URL +
      "/user/" +
      props.userData.username +
      "/attack";
    const req = await axios.patch(attackUrl, {
      size: size,
    });

    apiFetch(size)

    if (req.data.msg.includes("defeated")) {
      props.setNewTotalHP(0);
    } else {
      props.setNewTotalHP(req.data.monsterHP);
    }
  };

  async function apiFetch(){
    let amount ;
    size === 1 ? amount = 350 : size === 2 ? amount = 500 : amount = 750;
    try {
      await axios.post('https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/refills', {amount, tap_id: 1})
    } catch (err){
      console.log(err);
    }
    let backReq = await axios.get(`${process.env.REACT_APP_URL}/user/${props.userData.username}`)
    props.setUserData(backReq.data)
  }


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
