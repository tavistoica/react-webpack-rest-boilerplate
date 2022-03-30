import React, { useContext } from "react";
import AddTodoForm from "../components/molecules/AddTodoForm/AddTodoForm";
import Message from "../components/molecules/Message/Message";
import { AppProviderContext } from "../context/AppProvider";
import TodoList from "../components/organisms/TodoList/TodoList";

import "./style.css";

const Main = () => {
  const { state, actions } = useContext(AppProviderContext);

  return (
    <div className="main-page-container">
      {state.messages.map((item) => (
        <Message message={item.message} type="error" />
      ))}
      <AddTodoForm />
      <TodoList state={state} actions={actions} />
    </div>
  );
};

export default Main;
