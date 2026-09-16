import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

function App() {
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

  const playlistTracks = [
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
  ];

  return (
    <div>
      <SearchBar />
      <SearchResults tracks={searchResults} />
      <Playlist tracks={playlistTracks} />
    </div>
  );
}

export default App;