import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const searchResults = [
      {
          title: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera"
      },
      {
          title: "Numb",
          artist: "Linkin Park",
          album: "Meteora"
      },
      {
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours"
      }
  ];

  const playlistTracks = [
      {
          title: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera"
      },
      {
          title: "Numb",
          artist: "Linkin Park",
          album: "Meteora"
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