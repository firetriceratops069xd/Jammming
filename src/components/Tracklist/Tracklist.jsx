import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

function Tracklist ({ tracks }) {
    return (
        <div className={styles.tracklist}>
            {tracks.map((track) => {
                return (
                    <Track 
                        key={track.title}
                        title={track.title}
                        artist={track.artist}
                        album={track.album}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;