import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(setSearchParams);

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>{lat}</h2>
      <h2>{lng}</h2>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>New</button>
    </div>
  );
}

export default Map;
