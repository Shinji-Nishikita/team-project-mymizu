import "../styles/MapContainer.css";
import axios from "axios";
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_API_KEY;
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";



function MapContainer() {
  async function getPins() {
    try {
      const pins = await axios.get(
        "http://localhost:4000/user/Bryson");
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
