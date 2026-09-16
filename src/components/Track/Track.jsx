import styles from "./Track.module.css";

function Track({ name, artist, album }) {

    function handleAddToPlaylist() {
        console.log("Track added!");
    }

    return (
        <div className={styles.track}>   
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            <button onClick={handleAddToPlaylist}>Add to Playlist</button>
        </div>
    );
}

export default Track;