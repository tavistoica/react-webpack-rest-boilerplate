import React, { useState, useEffect } from "react";
import TodoCard from "../../molecules/TodoCard/TodoCard";

import "./TodoList.style.css";

const mainClass = "todo-list";

const TodoList = ({ state, actions }) => {
  const [todosList, setTodosList] = useState(null);

  const handleTodoRemove = (id) => actions.removeTodo(id);

  useEffect(() => {
    setTodosList(
      state.todos
        .map((item) => {
          return (
            <TodoCard
              message={item.message}
              key={item._id}
              id={item._id}
              removeTodo={handleTodoRemove}
            />
          );
        })
        .reverse()
    );
  }, [state.todos]);

  return <div className={mainClass}>{todosList}</div>;
};

export default TodoList;
