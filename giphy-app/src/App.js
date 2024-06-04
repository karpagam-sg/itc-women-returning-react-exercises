import { useEffect, useState } from "react";

function App() {
  const [gifs, setgifs] = useState([]);
  //const [saved, setsaved] = useState([]);

  useEffect(() => {
    // localStorage.setItem("savedGifs", []);
    console.log("datasaved", localStorage.getItem("savedGifs"));
    fetch(
      `https://api.giphy.com/v1/gifs/trending?rating=g&api_key=xUzTLyaAiiOo2yMDbVtOFEJMNhogPBn3`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.data);

        setgifs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function handleSave(url) {
    const saved = localStorage.getItem("savedGifs")
      ? JSON.parse(localStorage.getItem("savedGifs"))
      : [];
    saved.push(url);
    localStorage.setItem("savedGifs", JSON.stringify(saved));
    console.log("Gifs saved:", saved);
  }
  return (
    <div>
      <h1>Home page</h1>
      <div>
        {gifs.length > 0 &&
          gifs.map((gif) => (
            <div key={gif.id}>
              {" "}
              <img key={gif.id} src={gif.images.original.url} />
              <button onClick={() => handleSave(gif.images.original.url)}>
                Save
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
