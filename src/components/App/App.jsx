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
      id: 1
    },
    {
      name: "Numb",
      artist: "Linkin Park",
      album: "Meteora",
      id: 2
    }
  ]);

  const searchResults = [
      {
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera",
          id: 1
      },
      {
          name: "Numb",
          artist: "Linkin Park",
          album: "Meteora",
          id: 2
      },
      {
          name: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          id: 3
      }
  ];

  return (
    <div>
      <SearchBar />
      <SearchResults tracks={searchResults} />
      <Playlist 
        name={playlistName}
        tracks={playlistTracks} />
    </div>
  );
}

export default App;