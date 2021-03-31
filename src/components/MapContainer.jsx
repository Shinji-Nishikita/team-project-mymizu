import {useState, useEffect} from "react";
import "../styles/MapContainer.css";
import axios from "axios";
import GoogleMapReact from 'google-map-react';
import Pin from './Pin'
axios.defaults.headers.common["Authorization"] = process.env.REACT_APP_API_KEY;



function MapContainer( {user}) {
  const [pins, setPins] = useState([])
  const [pinComp,setPinComp] = useState([]);
  
  async function getPins() {
    // const userInfo = await axios.get(`${process.env.REACT_APP_URL}/user/${user}`)
    // console.log(userInfo.data);
    try {
      const pinsReq = await axios.get(
        "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius?longitude=139.73655447363853&latitude=35.671812626599866&radius=500");
      setPins(pinsReq.data)
      // console.log(pinsReq.data)
    } catch (err) {
      console.log(err);
    }
    // console.log(pins)
  }

  useEffect(getPins, [])

  useEffect(()=>{
    // console.log(pins)
    const temp = [];
    if (pins.length === 0) return 
    for (let pinInfo of pins.taps){
      console.log(pinInfo)
      temp.push(<Pin pinInfo={pinInfo} lat={pinInfo.latitude} lng={pinInfo.longitude}/>)
    }
    setPinComp(temp)
    console.log(pinComp)
  },[pins])

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact defaultCenter={{lat:60,lng:30 }} 
      defaultZoom={11}
    >
      {pinComp}
      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;
