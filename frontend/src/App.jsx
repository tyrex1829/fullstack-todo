import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // this is a wrong way to fetch, correct way is by useEffect hook
  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      {/* For creating a todo */}
      <CreateTodo />
      {/* For rendering a todo */}
      <Todos todos={[]} />
    </div>
  );
}

export default App;
