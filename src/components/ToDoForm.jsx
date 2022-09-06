import React from "react";
//import { useState } from "react";
const ToDoForm = ({ handleAdd, text, handleChange }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="add a new todo..."
        />
        <button onClick={() => handleAdd()}>Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
