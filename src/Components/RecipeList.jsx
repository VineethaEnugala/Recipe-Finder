import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, addToFavorites }) {
    console.log('Recipes:', recipes); // Log the recipes prop

    return (
        <div>
            <div className="recipe-list">
                {Array.isArray(recipes) && recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} addToFavorites={addToFavorites} />
                    ))
                ) : (
                    <p>No recipes found for your search.</p>
                )}
            </div>
        </div>
    );
}

export default RecipeList;
