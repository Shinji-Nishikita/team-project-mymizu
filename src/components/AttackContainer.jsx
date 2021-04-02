import React, { useState } from "react";
import axios from "axios";
import "../styles/AttackContainer.css";

axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_API_KEY;

function AttackContainer(props) {
  const [size, setSize] = useState(null);
  const [buttonColors, setButtonColors] = useState({ b1: "", b2: "", b3: "" });

  const attack = async (e) => {
    let attackUrl =
      process.env.REACT_APP_URL +
      "/user/" +
      props.userData.username +
      "/attack";
    const req = await axios.patch(attackUrl, {
      size: size,
    });

    apiFetch(size);

    if (req.data.msg.includes("defeated")) {
      props.setView("victory");
    } else {
      props.setNewTotalHP(req.data.monsterHP);
    }
  };

  async function apiFetch() {
    let amount;
    size === 1 ? (amount = 350) : size === 2 ? (amount = 500) : (amount = 750);
    try {
      await axios.post(
        "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/refills",
        { amount, tap_id: 1 }
      );
    } catch (err) {
      console.log(err);
    }
    let backReq = await axios.get(
      `${process.env.REACT_APP_URL}/user/${props.userData.username}`
    );
    props.setUserData(backReq.data);
  }

  const sizeSelect = (e) => {
    let size;
    let AttackAmount = +e.target.innerText;
    if (AttackAmount === 350) {
      size = 1;
      setButtonColors({ b1: "active", b2: "", b3: "" });
    } else if (AttackAmount === 500) {
      size = 2;
      setButtonColors({ b1: "", b2: "active", b3: "" });
    } else if (AttackAmount === 750) {
      size = 3;
      setButtonColors({ b1: "", b2: "", b3: "active" });
    }
    setSize(size);
  };

  return (
    <section className="AttackContainer">
      <section>
        <p className="sizeText">H20 Refill power (ml)</p>
        <button id="b350" onClick={sizeSelect} className={buttonColors.b1}>
          350
        </button>
        <button id="b500" onClick={sizeSelect} className={buttonColors.b2}>
          500
        </button>
        <button id="b750" onClick={sizeSelect} className={buttonColors.b3}>
          750
        </button>
      </section>
      <button className="attackButton" onClick={(e) => attack(e)}>
        H20 Refill Attack
      </button>
    </section>
  );
}

export default AttackContainer;
