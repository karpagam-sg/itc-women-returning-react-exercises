import React from "react";

function RecipeList({ recipes, selectRecipe }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          {recipe.name}
          <button onClick={() => selectRecipe(recipe)}>View</button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
