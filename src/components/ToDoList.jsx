import React from "react";

const ToDoList = ({ todoItem, handleDelete }) => {
  return (
    <div>
      <li>
        {todoItem.task}
        <button onClick={() => handleDelete(todoItem.id)}>x</button>
      </li>
    </div>
  );
};
export default ToDoList;
