import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const ToDoList = ({ todoItem, handleDelete, handleClick, index }) => {
  return (
    <div className="list">
      <span
        className={`${todoItem.done ? "item-done" : "item"}`}
        onClick={() => handleClick(index)}
      >
        <FontAwesomeIcon icon={faCheck} /> {todoItem.task}{" "}
      </span>
      <span>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => handleDelete(todoItem.id)}
        />
      </span>
    </div>
  );
};
export default ToDoList;
