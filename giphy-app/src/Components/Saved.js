import { useState, useEffect } from "react";

export default function Saved() {
  const [gifs, setgifs] = useState(
    localStorage.getItem("savedGifs")
      ? JSON.parse(localStorage.getItem("savedGifs"))
      : []
  );
  function handleRemove(indexvalue) {
    console.log("index value", indexvalue);
    let arr = [...gifs];
    arr.splice(indexvalue, 1);
    setgifs(arr);
  }
  useEffect(
    () => localStorage.setItem("savedGifs", JSON.stringify(gifs)),
    [gifs]
  );

  return (
    <div>
      <h1>Saved Gifs</h1>
      <div>
        {gifs.length > 0 ? (
          gifs.map((gif, index) => (
            <div key={index}>
              {" "}
              <img key={index} src={gif} />
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))
        ) : (
          <p> Saved Item Empty</p>
        )}
      </div>
    </div>
  );
}
