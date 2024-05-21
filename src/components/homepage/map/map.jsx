import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './map.css'; // 

const MapComponent = () => {
  return (
    <div className="background-map">
    <div className="container">
      <div className="map-container">
      <YMaps>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
          width="1181px"
          height="700px"
        >
          <Placemark geometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
    </div>
    </div>
    <div className="map__end">
        <div className="map__endtext">© SFedU Exponent - 2023 <br />Южный федеральный университет</div>
    </div>
    </div>
  );
};

export default MapComponent;
