import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/AttackContainer.css";
import Button from './Button'
function AttackContainer(props) {
  const [size, setSize] = useState(null)

  const attack = async (e) => {
    e.target.style.background = "red"
    // patch
    let attackUrl = process.env.REACT_APP_URL + "/user/" + props.userData.username + "/attack"
    const req = await axios.patch(attackUrl, {
      size: size
    });
  };

  useEffect(() => {

  })

  return <section className="AttackContainer">
    <section>
      <Button AttackAmount={350} setSize={setSize} />
      <Button AttackAmount={500} setSize={setSize} />
      <Button AttackAmount={750} setSize={setSize} />
    </section>
    <button
      style={{ background: "" }}
      onClick={(e) => attack(e)}>Attack</button>
  </section>
}

export default AttackContainer;
