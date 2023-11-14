import PropTypes from "prop-types"; // Import PropTypes

import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

// Define prop types
CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming 'id' is a number
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
