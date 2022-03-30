import React from "react";
import RemoveButton from "../../atoms/RemoveButton/RemoveButton";

import "./TodoCard.style.css";

export const mainClass = "todo-card";

const TodoCard = ({ id, message, removeTodo }) => {
  const handleRemove = () => removeTodo(id);

  return (
    <div className={mainClass}>
      <div className={`${mainClass}-text`}>{message}</div>
      <RemoveButton onClickEvent={handleRemove} />
    </div>
  );
};

export default TodoCard;
