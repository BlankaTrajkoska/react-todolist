import "./dist/css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const todoItems = [
    { id: 1000, task: "Walk the dog", done: false },
    { id: 2000, task: "Water the flower", done: true },
  ];

  const [todoList, setTodoList] = useState(todoItems);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = () => {
    if (text) {
      const newToDo = {
        id: Math.floor(Math.random() * 1000),
        task: text,
        done: false,
      };

      const newToDoList = [...todoList, newToDo];
      setTodoList(newToDoList);

      setText("");
    }
  };

  const handleDelete = (id) => {
    const newList = todoList.filter((each) => each.id !== id);
    setTodoList(newList);
  };

  const handleClick = (index) => {
    const newList = [...todoList];
    newList[index].done = !newList[index].done;
    setTodoList(newList);
  };
  console.log(todoList);
  return (
    <div className="App">
      <div className="headlist">
        <h1 className="title">Todo List</h1>
        <div className="list-container">
          {todoList.map((todoItem, index) => (
            <ToDoList
              key={todoItem.id}
              todoItem={todoItem}
              handleDelete={handleDelete}
              handleClick={handleClick}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="form">
        <ToDoForm
          handleChange={handleChange}
          handleAdd={handleAdd}
          text={text}
        />
      </div>
    </div>
  );
}

export default App;
