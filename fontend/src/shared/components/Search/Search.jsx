import styles from "./Search.module.css";
import { useState, useEffect } from "react";
import API from "../../utils/API";
function Search() {
    // State
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    //Handle Search Function
    const handleSearch = () => {
        if (!query.trim()) return;
        setLoading(true); // Set loading to true
        // Fetch data
        fetch(`${API.get_search}?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResults(data.items);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
        // Clear search
        setQuery("");
    };


    return (
        <div className={styles.searchContainer}>
            {console.log(query)}
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search..."
        />
            <button className={styles.searchButton} onClick={handleSearch}><i className="ti-search"></i></button>
        </div>
        
    );
}
export default Search;
