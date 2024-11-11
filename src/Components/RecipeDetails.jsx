import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails({ addToFavorites, favorites }) {  // Pass favorites as a prop
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            const apiKey = "c52495ac81fe465f9bbad719064fc554";
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

            try {
                const response = await axios.get(url);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    // Check if the recipe is already in the favorites list
    const isFavorite = favorites.some(fav => fav.id === parseInt(id));

    return (
        <div>
            {recipe ? (
                <div className='recipeDetails'>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="recipe-div">
                        <h3>Ingredients</h3>
                        <ul>
                            {recipe.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                        <h3>Instructions</h3>
                        <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                    </div>
                    {/* Only show "Add to Favorites" if it's not already a favorite */}
                    {!isFavorite && (
                        <button className='btn' onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RecipeDetails;
