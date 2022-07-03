import React, { useEffect  } from "react"; 
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import "./BaseMap.css";
const BaseMap = (props) => {  
  mapboxgl.accessToken = 'pk.eyJ1IjoiaHFuZ2hpODgiLCJhIjoiY2t0N2w0cGZ6MHRjNTJ2bnJtYm5vcDB0YyJ9.oTjisOggN28UFY8q1hiAug';
  // console.log(props);
  useEffect(() => { 
    new mapboxgl.Map({
      container: props.id ,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id={props.id}  className="map"></div>;
};

export default BaseMap;

// class BaseMap extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: props.data
//     };
//   }

//   render() {
//       mapboxgl.accessToken = 'pk.eyJ1IjoiaHFuZ2hpODgiLCJhIjoiY2t0N2w0cGZ6MHRjNTJ2bnJtYm5vcDB0YyJ9.oTjisOggN28UFY8q1hiAug';

//   useEffect(() => {
//     new mapboxgl.Map({
//       container: "mapContainer",
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [-74.5, 40],
//       zoom: 9,
//     });
//   }, []);
//   return <div id="mapContainer" className="map"></div>;
//   }
// }

// export default BaseMap;
