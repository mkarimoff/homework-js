// import React from "react";
// import { useEffect } from "react";
// import styled from "styled-components";

// const KakaoMap = () => {
//   const new_script = (src) => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.addEventListener("load", () => {
//         resolve();
//       });
//       script.addEventListener("error", (e) => {
//         reject(e);
//       });
//       document.head.appendChild(script);
//     });
//   };

//   useEffect(() => {
//     const my_script = new_script(
//       "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b8ba560cb7cc6e9686cb28455fcbb3f2"
//     );
//     my_script.then(() => {
//       const kakao = window["kakao"];
//       kakao.maps.load(() => {
//         const mapContainer = document.getElementById("map");
//         const options = {
//           center: new kakao.maps.LatLng(35.122, 128),
//           level: 10,
//         };
//         const map = new kakao.maps.Map(mapContainer, options);

//         const markerPositions = [new kakao.maps.LatLng(35.122, 128)];

//         markerPositions.forEach((position) => {
//           const marker = new kakao.maps.Marker({
//             position: position,
//           });
//           marker.setMap(map);
//         });
//       });
//     });
//   }, []);

//   return (
//     <Wrapper style={{ display: "flex", justifyContent: "center" }}>
//       <MapContainer>
//         <h1>찾아오시는길</h1>

//         <div id="map" className="map" />
//       </MapContainer>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   display: flex;
//   gap: 50px;
//   margin: 50px 0;
//   width: 100%;
//   margin-top: -250px;
//   .map {
//     flex: 1;
//     height: 400px;
//     border: 1px solid black;
//     align-items: center;
//     justify-content: center;
//   }
//   @media only screen and (max-width: 900px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin: 0;
//     padding: 0;
//     height: 400px;
//   }
// `;

// const MapContainer = styled.div`
//   flex: 1;
//   .map {
//     flex: 1;
//     height: 400px;
//     /* width: 400px;
//     height: 400px; */
//     align-items: center;
//     justify-content: center;
//   }
//   @media only screen and (max-width: 900px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 10px;
//     h1 {
//       margin: 0;
//       padding: 0;
//     }
//     .map {
//       display: none;
//     }
//   }
// `;
// const TextWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   p {
//     font-size: large;
//     margin-left: 20px;
//   }
//   h1,
//   h3 {
//     @media only screen and (max-width: 900px) {
//       text-align: center;
//     }
//   }
// `;

// export default KakaoMap;
 
import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps'; // Assuming you're using a Kakao Maps React wrapper

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}

export default KakaoMap;
