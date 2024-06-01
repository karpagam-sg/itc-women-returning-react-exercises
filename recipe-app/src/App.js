import logo from "./logo.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";
import { useState, useEffect } from "react";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from "./components/RecipeForm";

function App() {
  const [recipes, setrecipes] = useState([
    { name: "rench Toast", ingredients: "rench", instructions: "test" },
    { name: "Veggie Burger", ingredients: "Veggie", instructions: "Veggie" },
  ]);
  const [recipe, setrecipe] = useState({
    name: null,
    ingredients: null,
    instructions: null,
  });
  // const [recipe, setrecipe] = useState(null);

  function selectRecipe(recipevalue) {
    console.log(recipevalue);
    setrecipe(recipevalue);
    console.log(recipe);
  }
  useEffect(() => {
    console.log("State updated:", recipe);
  }, [recipe]);

  function addRecipe(name, ingredients, instructions) {
    setrecipes((prevRecipes) => [
      ...prevRecipes,
      { name: name, ingredients: ingredients, instructions: instructions },
    ]);
    console.log(name);
  }

  useEffect(() => {
    console.log("recipe added:", recipes);
  }, [recipes]);

  return (
    <div className="App">
      <RecipeForm addRecipe={addRecipe}></RecipeForm>
      <RecipeList recipes={recipes} selectRecipe={selectRecipe}></RecipeList>
      {recipe.name != null && <RecipeDetails recipe={recipe} />}
    </div>
  );
}

export default App;
