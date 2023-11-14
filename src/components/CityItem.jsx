import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import PropTypes from "prop-types";

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired, 
  }).isRequired,
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function CityItem({ city }) {
  const { cityName, emoji, date, id, position: {lat, lng} } = city;

  return (
    <li>
      {/* See Notion for more explanation */}
      <Link className={styles.cityItem} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
