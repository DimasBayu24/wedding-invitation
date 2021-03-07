// import React, { useRef, useEffect } from 'react';

// import './Map.css';

// const Map = (props) => {
//   const mapRef = useRef();

//   const { zoom } = props;

//   useEffect(() => {
//     new window.ol.Map({
//       target: mapRef.current.id,
//       layers: [
//         new window.ol.layer.Tile({
//           source: new window.ol.source.OSM(),
//         }),
//       ],
//       view: new window.ol.View({
//         center: window.ol.proj.fromLonLat([-6.6563159, 106.79808299999999]),
//         zoom: zoom,
//       }),
//     });
//   }, [[-6.6563159, 106.79808299999999], zoom]);

//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//       id="map"
//     ></div>
//   );
// };

// export default Map;
