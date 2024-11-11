import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, addToFavorites, showAddToFavorites = true }) {
    return (
        <div className="recipe-card">
            <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            {/* Conditionally render the "Add to Favorites" button based on showAddToFavorites */}
            {showAddToFavorites && (
                <button className="btn" onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
            )}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
    );
}

export default RecipeCard;
