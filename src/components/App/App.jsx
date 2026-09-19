import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

function App() {
  const [playlistName, setPlaylistName] = useState("My Awesome Playlist");
  
  const [playlistTracks, setPlaylistTracks] = useState([
    {
        name: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
        id: 1,
        uri: "spotify:track:bohemian-rhapsody"
    },
    {
        name: "Numb",
        artist: "Linkin Park",
        album: "Meteora",
        id: 2,
        uri: "spotify:track:numb"
    }
  ]);

  function removeFromPlaylist(track) {
    const updatedTracks = playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    setPlaylistTracks(updatedTracks);
  }

  function addTrack(track) {
    const alreadyExists = playlistTracks.some(
      (playlistTrack) => playlistTrack.id === track.id
    )

    if (!alreadyExists) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  function savePlaylist() {
    console.log("savePlaylist was called!");
    const trackUris = playlistTracks.map(track => track.uri)
    console.log(trackUris);
    setPlaylistTracks([]);
  }

  const searchResults = [
      {
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera",
          id: 1,
          uri: "spotify:track:bohemian-rhapsody"
      },
      {
          name: "Numb",
          artist: "Linkin Park",
          album: "Meteora",
          id: 2,
          uri: "spotify:track:numb"
      },
      {
          name: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          id: 3,
          uri: "spotify:track:blinding-lights"
      }
  ];

  return (
    <div>
      <SearchBar />
      <SearchResults 
        tracks={searchResults}
        onAdd={addTrack}
      />
      <Playlist 
        name={playlistName}
        tracks={playlistTracks}
        onRemove={removeFromPlaylist}
        onChange={setPlaylistName}
        onSave={savePlaylist}  
      />
    </div>
  );
}

export default App;