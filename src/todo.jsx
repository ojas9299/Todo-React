import { useState } from "react";

export default function Todolist() {
  let styles = {
    border: "2px solid white",
    padding: "50px",
    borderRadius: "25px",
  };
  const [todos, settodos] = useState(["Example"]);
  const [newtodo, setnewtodo] = useState("");

  let Addtodo = () => {
    settodos([...todos, newtodo]);
    setnewtodo("");
  };

  let newtask = (event) => {
    setnewtodo(event.target.value);
  };

  return (
    <div style={styles}>
      <h1>To-Do List!</h1>
      <input
        style={{ padding: "20px", borderRadius: "20px" }}
        placeholder="enter tasks todo"
        value={newtodo}
        onChange={newtask}
      ></input>
      <br />
      <br />
      <button onClick={Addtodo}>Enter</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <ul style={{ fontWeight: "bold" }}>
        {todos.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}
