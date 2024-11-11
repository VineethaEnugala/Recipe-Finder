import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import Favorites from './Components/Favorites';
import HomePage from './Components/HomePage';
import './styles/App.css';

function App() {
    const [favorites, setFavorites] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const addToFavorites = (recipe) => {
        if (!favorites.find(fav => fav.id === recipe.id)) {
            setFavorites([...favorites, recipe]);
        }
    };

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(fav => fav.id !== id));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleRecipes = (newRecipes) => {
        setRecipes(newRecipes);
    };

    // Define routes array
    const routes = [
        {
            path: "/",
            element: recipes.length === 0 ? <HomePage /> : <RecipeList addToFavorites={addToFavorites} recipes={recipes} />,
        },
        {
            path: "/recipe/:id",
            element: <RecipeDetails addToFavorites={addToFavorites} favorites={favorites} />,
        },
        {
            path: "/favorites",
            element: <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />,
        },
    ];

    // Create router with future flags enabled
    const router = createBrowserRouter(routes, {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        },
    });

    return (
        <RouterProvider router={router}>
            <div className="App">
                <Header onSearch={handleSearch} setRecipes={handleRecipes} />
            </div>
        </RouterProvider>
    );
}

export default App;
