import { useState, useEffect } from "react";
import "../styles/MapContainer.css";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import Pin from "./Pin";
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_API_KEY;

function MapContainer({ user }) {
  const [pins, setPins] = useState([]);
  const [pinComp, setPinComp] = useState([]);
  const [currLoc, setCurrentLoc] = useState({});

  function getPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }

  function getPins() {
    if(!currLoc.lat) return 
    (async function () {
      try {
        const pinsReq = await axios.get(
          `https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius?longitude=${currLoc.lng}&latitude=${currLoc.lat}&radius=500`
        );
        setPins(pinsReq.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(getPins, [currLoc]);

  useEffect(() => {
    if (pins.length === 0) return
    const temp = [];
    if (pins.length === 0) return;
    for (let pinInfo of pins.taps) {
      // console.log(pinInfo)
      temp.push(
        <Pin pinInfo={pinInfo} lat={pinInfo.latitude} lng={pinInfo.longitude} key={pinInfo.name}/>
      );
    }
    setPinComp(temp);
  }, [pins]);

  function handleScroll(e){
    setCurrentLoc(e.center)
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {currLoc.lat && (
        <GoogleMapReact center={currLoc} defaultCenter={{lat:35, lng: -139}} defaultZoom={17} onChange={handleScroll}>
          {pinComp}
        </GoogleMapReact>
      )}
    </div>
  );
}

export default MapContainer;
