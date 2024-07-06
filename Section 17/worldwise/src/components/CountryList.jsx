/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );

  const countries = [];

  cities.forEach((city) => {
    if (!countries.some((c) => c.country === city.country)) {
      countries.push({ country: city.country, emoji: city.emoji });
    }
  });

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
