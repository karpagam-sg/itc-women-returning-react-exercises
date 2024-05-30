export default function TODoComponent({ item, todos, settodos }) {
  function HandleDelete(item) {
    // console.log("Delete item for", item.name);
    settodos(todos.filter((todo) => todo.name !== item.name));
  }
  function HandleClick(name) {
    const newtodos = todos.map((todo) =>
      todo.name === name ? { ...todo, completed: !todo.completed } : todo
    );
    settodos(newtodos);
    //console.log(todos);
  }
  return (
    <div>
      <span
        onClick={() => HandleClick(item.name)}
        style={{ textDecoration: item.completed && "line-through" }}
      >
        {" "}
        {item.name}
      </span>

      <button onClick={() => HandleDelete(item)}>Remove</button>
    </div>
  );
}
