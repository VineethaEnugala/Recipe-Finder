import React, { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
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

  return (
    <BrowserRouter>
      <div className="App">
        <Header onSearch={handleSearch} setRecipes={handleRecipes} />
        <Routes>
          <Route path="/" element={recipes.length === 0 ? <HomePage /> : <RecipeList addToFavorites={addToFavorites} recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetails addToFavorites={addToFavorites} favorites={favorites} />} /> {/* Pass favorites */}
          <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
