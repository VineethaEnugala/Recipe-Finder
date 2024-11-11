import React from 'react';
import RecipeCard from './RecipeCard';

function Favorites({ favorites, removeFromFavorites }) {
    return (
        <div>
            <h2>Your Favorite Recipes</h2>
            <div className="recipe-list">
                {favorites.length > 0 ? (
                    favorites.map((recipe) => (
                        <div key={recipe.id}>
                            {/* Pass showAddToFavorites={false} to hide the button */}
                            <RecipeCard recipe={recipe} showAddToFavorites={false} />
                            <button className="btn" onClick={() => removeFromFavorites(recipe.id)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>No favorites added yet.</p>
                )}
            </div>
        </div>
    );
}

export default Favorites;
