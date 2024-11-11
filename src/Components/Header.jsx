import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Header({ onSearch, setRecipes }) {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        onSearch(query);  // Pass the search query to the App component
        await fetchRecipes(query); // Fetch the recipes using the search query
    };

    const fetchRecipes = async (query) => {
        const apiKey = "c52495ac81fe465f9bbad719064fc554";  // Replace with your actual API key
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=10`;

        try {
            const response = await axios.get(url);
            setRecipes(response.data.results);  // Update the recipes in App component
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <header>
            <h1>Recipe Finder</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}  // Update the query as the user types
                    placeholder="Search for recipes..."
                />
                <button type="submit">Search</button>
            </form>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </header>
    );
}

export default Header;
