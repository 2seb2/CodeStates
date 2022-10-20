import React, { useEffect, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoContainer from "./components/TodoContainer";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Todos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <TodoContainer todos={todos}>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoContainer>
  );
}

export default App;
