import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

// * Styles * //
import "../styles/index.scss";

const TravelItem = ({ coverImage, title, duration, countries, score, price }) => (
  <div className="travel__item">
    <img src={coverImage} alt={`${title} - cover image`} className="travel__cover-image"/>
    <div className="travel__content">
      <span className="travel__content-params">{countries.length} Countries, {duration} Days</span>
      <h4 className="travel__content-title">{title}</h4>
      <div className="travel__content-rating">
        <ReactStars
          count={5}
          value={score}
          size={16}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
        <span className="travel__content-scores">{score}</span>
      </div>
      <div className="travel__content-price">
        <span className="travel__content-price--from">From €{price.from}</span>
        <span className="travel__content-dot"></span>
        <span className="travel__content-price--discount">Price €{price.discount}</span>
      </div>
    </div>
  </div>
);

TravelItem.propTypes = {
  id: PropTypes.number,
  coverImage: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  countries: PropTypes.array,
  score: PropTypes.number,
  price: PropTypes.number
};

export default TravelItem;