import { useState } from "react";

export default function Search() {
  const [searchvalue, setsearchvalue] = useState("");
  const [gifs, setgifs] = useState([]);

  function HandleSearch() {
    const url =
      "https://api.giphy.com/v1/gifs/search?rating=g&api_key=xUzTLyaAiiOo2yMDbVtOFEJMNhogPBn3&q=" +
      searchvalue;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.data);

        setgifs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

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
      <h1>Search page</h1>
      search here:
      <input
        type="text"
        value={searchvalue}
        onChange={(e) => setsearchvalue(e.target.value)}
      ></input>
      <div>
        <button type="button" onClick={HandleSearch}>
          Search
        </button>
      </div>
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
