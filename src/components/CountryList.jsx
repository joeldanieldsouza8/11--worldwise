import PropTypes from "prop-types"; // Import PropTypes

import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

// Define prop types
CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming 'id' is a number
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );
  }

  /* 
    How the derived state below works:

    1. Create an empty array to store the countries
    2. Loop through the cities array
    3. Check if the country already exists in the array
    4. If not, add it to the array
    5. If it does, do nothing
    6. Return the array
  */

  // Derived state
  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  /* 
    // Best Time Complexity
    // Derived state using Set for O(n) complexity
    const countriesSet = new Set();
    const countries = cities.filter(city => {
      if (!countriesSet.has(city.country)) {
        countriesSet.add(city.country);
        return true;
      }
      return false;
    }).map(city => ({
      country: city.country,
      emoji: city.emoji,
    }));
  */

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
