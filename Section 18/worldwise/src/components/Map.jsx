import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const { addCity, isLoading } = useCities();

  const [mapPosition, setPosition] = useState([43.7, 18.5]);
  const { cities, currentCity } = useCities();
  const { mapLat, mapLng } = useUrlPosition();
  const {
    isLoading: isGeolocationLoading,
    position: geolocationPosition,
    getPosition: getGeolocationPosition,
  } = useGeolocation();

  // console.log(geolocationPosition);

  useEffect(
    function () {
      if (geolocationPosition.lat)
        setPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  useEffect(
    function () {
      if (mapLat && mapLng) setPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={`${styles.mapContainer} ${isLoading ? "loading" : ""}`}>
      <Button type="position" onClick={() => getGeolocationPosition()}>
        {isGeolocationLoading ? "Loading..." : "USE YOUR POSITION"}{" "}
      </Button>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <CenterPosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function CenterPosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
