import { useState } from "react";

export default function RecipeForm({ addRecipe }) {
  const [name, setName] = useState("");
  const [ingredients, setingredients] = useState("");
  const [instructions, setinstructions] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    addRecipe(name, ingredients, instructions);
    setName("");
    setingredients("");
    setinstructions("");
  }
  return (
    <div>
      <form>
        <div>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
          ></input>
        </div>
        <div>
          Ingredients:
          <input
            type="textarea"
            value={ingredients}
            onChange={(e) => setingredients(e.target.value)}
            placeholder="Ingredients"
          ></input>
        </div>
        <div>
          instructions:
          <input
            type="textarea"
            value={instructions}
            onChange={(e) => setinstructions(e.target.value)}
            placeholder="Instructions"
          ></input>
        </div>
        <br></br>
        <button onClick={(e) => handleSubmit(e)}>Add Recipe</button>
      </form>
    </div>
  );
}
