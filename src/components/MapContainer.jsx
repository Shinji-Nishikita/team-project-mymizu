import React from "react";
import "../styles/MapContainer.css";
import axios from "axios";
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_API_KEY;
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";



function MapContainer() {
  async function getPins() {
    const user = await axios.get("http://localhost:4000/user/Bryson")
    console.log(user.data);
    try {
      const pins = await axios.get(
        "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius?longitude=139.73655447363853&latitude=35.671812626599866&radius=500");
      console.log(pins);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="MapContainer" onClick={getPins}>
      MapContainer{" "}
    </section>
  );
}

export default MapContainer;
