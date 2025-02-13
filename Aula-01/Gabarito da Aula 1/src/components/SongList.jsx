import SongItem from "./SongItem";
import PropTypes from "prop-types";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  //let items = 5;
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((_, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} key={index} index={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

SongList.propTypes = {
  songsArray: PropTypes,
};

export default SongList;
