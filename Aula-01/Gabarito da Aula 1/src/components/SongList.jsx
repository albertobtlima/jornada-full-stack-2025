import SongItem from "./SongItem";
import PropTypes from "prop-types";

const SongList = ({ songsArray }) => {
  return (
    <div className="song-list">
      {songsArray.map((currentSongObj, index) => (
        <SongItem {...currentSongObj} key={index} index={index}/>
      ))}

      <SongItem />
      <SongItem />

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

SongList.propTypes = {
  songsArray: PropTypes,
};

export default SongList;
