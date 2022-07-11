import PropTypes from "prop-types";

// * Components * //
import TravelItem from "./TravelItem";

// * Styles * //
import "../styles/index.scss";

const Trips = ({ travels }) => {
  return (
    <section className="travel">
      {
        travels.length && travels.map((item) => {
          const { id, coverImage, title, duration, countries, score, price } = item;
          return <TravelItem 
            key={id} 
            coverImage={coverImage} 
            title={title} 
            duration={duration} 
            countries={countries} 
            score={score} 
            price={price} 
          />;
        })
      }
    </section>
  );
};

Trips.propTypes = {
  travels: PropTypes.array.isRequired
};

export default Trips;