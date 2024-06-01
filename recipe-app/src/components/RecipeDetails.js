import React from "react";

export default function RecipeDetails({ recipe }) {
  return (
    <div>
      <div>Recipe Name :{recipe.name}</div>
      <div>Ingredients :{recipe.ingredients}</div>
      <div>Instructions :{recipe.instructions}</div>
    </div>
  );
}
