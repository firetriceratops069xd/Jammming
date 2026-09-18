import styles from "./Track.module.css";

function Track({ track, onAdd, onRemove }) {

    function handleAddToPlaylist() {
        onAdd(track);
    }

    function handleRemoveFromPlaylist() {
        onRemove(track);
    }

    return (
        <div className={styles.track}>   
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={handleAddToPlaylist}>Add to Playlist</button>
            <button onClick={handleRemoveFromPlaylist}>-</button>
        </div>
    );
}

export default Track;