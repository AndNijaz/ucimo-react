// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import ButtonBack from "./ButtonBack";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();

  const { mapLat, mapLng } = useUrlPosition();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState(false);

  const { addCity } = useCities();

  useEffect(
    function () {
      async function getCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError(false);
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${mapLat}&longitude=${mapLng}`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "This is not a country, pleease click somewhere else"
            );
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(data.countryCode);
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      getCityData();
    },
    [mapLat, mapLng]
  );

  if (geocodingError) return <Message message={geocodingError} />;
  if (isLoadingGeocoding) return <Spinner />;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type="primary"
          onClick={(e) => {
            e.preventDefault();
            addCity({
              cityName,
              country,
              date,
              notes,
              position: { mapLat, mapLng },
              emoji: "♥️",
              id: Math.floor(Math.random() * 100000),
            });
            navigate(-1);
          }}
        >
          Add
        </Button>
        <ButtonBack />
      </div>
    </form>
  );
}

export default Form;
