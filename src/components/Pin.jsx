import { useState } from "react";
import '../styles/Pin.css'

export default function Pin({ pinInfo }) {
  const [clicked, setClicked] = useState(null);

  return (
    <>
      <img
        style={{ width: "30px", height: "35px" }}
        src="https://i.ibb.co/q1Y3SpK/oie-jx-XJXNBTAk-Ti.png"
        onClick={() => {
          setClicked(!clicked);
        }}
      ></img>
      {clicked && (
        <div className="pinInfo">
          <h3>{pinInfo.name}</h3>
          <h5>
            {pinInfo.address}
          </h5>
          <h5>{pinInfo.comment}</h5>
          <img src={pinInfo.photo_url} alt={pinInfo.name} style={{maxWidth:"100%"}}></img>
        </div>
      )}
    </>
  );
}
