import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
function App() {
  // const state = {
  const todos = [
    { id: 1, task: "Walk the dog", done: false },
    { id: 2, task: "Water the flower", done: true },
  ];
  // };

  const [state, setState] = useState(todos);
  return (
    <Router>
      <div className="App">
        <div>
          <h1>Todo List</h1>
          <div>
            <ul>
              {todos.map((todo) => (
                <ToDoList key={todo.id} todo={todo} />
              ))}
            </ul>
          </div>
        </div>
        <ToDoForm todos={todos} />
      </div>
    </Router>
  );
}

export default App;
