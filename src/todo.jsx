import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  let styles = {
    border: "2px solid white",
    padding: "50px",
    borderRadius: "25px",
  };
  const [todos, settodos] = useState([{ task: "Example", id: uuidv4() }]);
  const [newtodo, setnewtodo] = useState("");

  let Addtodo = () => {
    settodos((curr) => {
      return [...curr, { task: newtodo, id: uuidv4() }];
    });
    setnewtodo("");
  };

  let newtask = (event) => {
    setnewtodo(event.target.value);
  };

  let deletetodo = (id) => {
    settodos((todo) => todos.filter((todo) => todo.id != id));
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
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deletetodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
