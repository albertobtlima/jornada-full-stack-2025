import PropTypes from "prop-types";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items, itemsArray, path }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a className="item-list__link" href={path}>
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem {...currentObj} key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  itemsArray: PropTypes.isRequired,
  path: PropTypes.string.isRequired,
};

export default ItemList;
