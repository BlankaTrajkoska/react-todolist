import React from "react";

const ToDoList = ({ todo }) => {
  return (
    <div>
      <li>
        {todo.task}
        <button>x</button>
      </li>
    </div>
  );
};
export default ToDoList;
