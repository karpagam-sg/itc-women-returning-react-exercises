function ToDoApp({ namedetail, weatherdetail, toDosdetails }) {
  return (
    <div>
      <h1>Welcome to {namedetail}'s To-Do List</h1>
      <h2>
        The weather in {weatherdetail.currentCity} is{" "}
        {weatherdetail.description} with a temperature of{" "}
        {weatherdetail.temperature} degrees fahrenheit.
      </h2>
      {toDosdetails.map((tododetail) => console.log(tododetail))}
      <div>
        <ul>
          {toDosdetails.map((tododetail) => (
            <li>{tododetail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
