import React from "react";

const ToDoForm = ({ handleAdd, text, handleChange }) => {
  return (
    <div className="form-container">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="add a new todo..."
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default ToDoForm;
