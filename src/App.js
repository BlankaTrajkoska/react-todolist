import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
//import { useEffect } from "react";
function App() {
  // const state = {
  const todoItems = [
    { id: 1000, task: "Walk the dog", done: false },
    { id: 2000, task: "Water the flower", done: true },
  ];
  // };

  const [todoList, setToDoList] = useState(todoItems);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = () => {
    const newToDo = {
      id: Math.floor(Math.random() * 1000),
      task: text,
      done: false,
    };

    const newToDoList = [...todoList, newToDo];
    setToDoList(newToDoList);
    console.log(todoList);
    setText("");
  };

  const handleDelete = (id) => {
    const newList = todoList.filter((i) => i.id !== id);
    setToDoList(newList);
  };

  return (
    <Router>
      <div className="App">
        <div>
          <h1>Todo List</h1>
          <div>
            <ul>
              {todoList.map((todoItem) => (
                <ToDoList
                  key={todoItem.id}
                  todoItem={todoItem}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </div>
        </div>
        <ToDoForm
          handleChange={handleChange}
          handleAdd={handleAdd}
          text={text}
        />
      </div>
    </Router>
  );
}

export default App;
