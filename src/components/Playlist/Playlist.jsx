import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function Playlist({ name, tracks, onRemove }) {
    function handleSave(event) {
        event.preventDefault();
        console.log("Playlist saved!")
    }

    return (
        <form className={styles.playlist} onSubmit={handleSave}>
            <h2>{name}</h2>

            <label htmlFor="playlist-name">Playlist name</label>
            <input className={styles.playlistName} id="playlist-name" type="text"/>

            <Tracklist 
                tracks={tracks}
                onRemove={onRemove} 
            />
            
            <button className={styles.button}>Save to Spotify</button>
        </form>
    )    
}

export default Playlist;