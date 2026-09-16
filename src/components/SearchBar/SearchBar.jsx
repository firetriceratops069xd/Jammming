import styles from "./SearchBar.module.css";

function SearchBar() {
    function handleSearch() {
        event.preventDefault();
        console.log("User has made a search");
    }

    return (
        <form className={styles.searchBar} onSubmit={handleSearch}>
            <label htmlFor="search">Search for a song</label>
            <input className={styles.searchInput} id="search" name="search" type="text" />
            <button className={styles.searchButton} type="submit">Search</button>
        </form>
    );
}

export default SearchBar;