import PropTypes from "prop-types";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //console.log(useLocation());
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < finalItems)
          .map((currentObj, index) => (
            <SingleItem
              {...currentObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
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
  idPath: PropTypes.string.isRequired,
};

export default ItemList;
