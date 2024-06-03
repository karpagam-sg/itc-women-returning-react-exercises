import { useEffect, useState } from "react";
import Display from "../Display";

function Jeopardy(props) {
  let [score, setScore] = useState(0);
  let [jeopardyData, setJeopardyData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  let [categories, setcategories] = useState([
    {
      id: 4,
      title: '"\'YS" WORDS',
      canon: true,
    },
    {
      id: 5,
      title: '"-ARES"',
      canon: true,
    },
    {
      id: 6,
      title: '"-ARY"',
      canon: true,
    },
    {
      id: 7,
      title: '"-ED" HOMONYM',
      canon: true,
    },
    {
      id: 8,
      title: '"-EY" MAN',
      canon: true,
    },
    {
      id: 9,
      title: '"-ICIAN" EXPEDITION',
      canon: true,
    },
    {
      id: 10,
      title: '"-LY" WORDS THAT AREN\'T ADVERBS',
      canon: true,
    },
    {
      id: 11,
      title: '"-UP"',
      canon: true,
    },
    {
      id: 12,
      title: '"...OD" WORDS',
      canon: true,
    },
  ]);

  //get a new random question from the API and add it to the data object in state
  let getNewQuestion = (categoryId) => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/clues?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        // get random index value
        console.log("data", data);
        const randomIndex = Math.floor(Math.random() * data.clues.length);
        const item = data.clues[randomIndex];
        console.log("index", randomIndex);
        console.log("item", item);
        // const shuffled = shuffleArray(data);
        // console.log(shuffled);
        // const currentQuestion = shuffled.clues[currentQuestionIndex];
        setJeopardyData(item);
        // console.log(shuffled.clues[currentQuestionIndex]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function handleCategoryChange(e) {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    console.log("categoryid", categoryId);
    getNewQuestion(categoryId);
  }

  return (
    <div>
      <div>
        <label>Select Category:</label>
        <select
          id="category"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Select a category</option>
          {categories.length > 0 &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
        </select>
      </div>
      <div>
        {selectedCategory != "" ? (
          <Display
            question={jeopardyData.question}
            answerformapi={jeopardyData.answer}
            categoryid={selectedCategory}
            value={jeopardyData.value}
            getNewQuestion={getNewQuestion}
          ></Display>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default Jeopardy;
