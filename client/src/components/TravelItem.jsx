import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

// * Styles * //
import "../styles/index.scss";

// * Helpers * //
import { scoreCheck } from "../helpers/scoreCheck";
import { plurarForm } from "../helpers/plurarForm";

const TravelItem = ({ coverImage, title, duration, countries, score, price }) => (
  <div className="travel__item">
    {coverImage && <img src={coverImage} alt={`${title} - cover image`} className="travel__cover-image"/>}
    <div className="travel__content">
      {countries && duration && <span className="travel__content-params">{countries.length} {plurarForm("Country", "Countries", countries.length)}, {duration} {plurarForm("Day", "Days", duration)}</span>}
      {title && <h4 className="travel__content-title">{title}</h4>}
      {score && <div className="travel__content-rating">
        <ReactStars
          count={5}
          value={scoreCheck(score)}
          size={16}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
        <span className="travel__content-scores">{score}</span>
      </div>}
      {price && <div className="travel__content-price">
        <span className="travel__content-price--from">From €{price.from}</span>
        <span className="travel__content-dot"></span>
        <span className="travel__content-price--discount">Price €{price.discount}</span>
      </div>}
    </div>
  </div>
);

TravelItem.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  countries: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  price: PropTypes.object.isRequired
};

export default TravelItem;