import { useState } from "react";

export default function Display({
  question,
  categoryid,
  answerformapi,
  value,
  getNewQuestion,
}) {
  let [answer, setAnswer] = useState("");
  let [score, setScore] = useState(0);

  function HandleSubmit() {
    console.log(answerformapi);

    console.log(answer);
    if (answerformapi.toLowerCase() === answer.toLowerCase()) {
      let newscore = score + value;
      setScore(newscore);
    } else {
      let newscore = score - value;
      setScore(newscore);
    }
    getNewQuestion(categoryid);
    setAnswer("");
  }

  return (
    <div>
      <br></br>
      <div>Question:{question}</div>
      <br></br>
      <div>
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></input>
      </div>
      <br></br>

      <div>
        <button type="button" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
      <br></br>
      <div>value:{value}</div>
      <br></br>
      <div>Your Score:{score}</div>
    </div>
  );
}
