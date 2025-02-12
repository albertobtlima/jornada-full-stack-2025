import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = ({ name, image, artist }) => {
  return (
    <a href="/" className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </a>
  );
};

SingleItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default SingleItem;
