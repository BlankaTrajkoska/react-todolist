import React from "react";
import { useState } from "react";
const ToDoForm = ({ todos }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToDo = {
      id: Math.floor(Math.random() * 100),
      task: text,
      done: false,
    };
    todos.push(newToDo);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
