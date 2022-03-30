import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_ALL_TODOS_ERROR,
  GET_ALL_TODOS_SUCCESS,
  APPLICATION_ERROR,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
} from "../actions/types";
import { applicationJson } from "../utils/constants";

export const addTodo = async (dispatch, body) => {
  try {
    const response = await fetch("http://localhost:3001/todo/", {
      method: "POST",
      headers: {
        "Content-Type": applicationJson,
        Accept: applicationJson,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: ADD_TODO_ERROR,
        payload: data,
      });
    }

    dispatch({ type: ADD_TODO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const getAllTodos = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/todo/", {
      method: "GET",
      headers: {
        "Content-Type": applicationJson,
        Accept: applicationJson,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: GET_ALL_TODOS_ERROR,
        payload: data,
      });
    }

    return dispatch({ type: GET_ALL_TODOS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const removeTodo = async (dispatch, id) => {
  try {
    const response = await fetch(`http://localhost:3001/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": applicationJson,
        Accept: applicationJson,
      },
    });

    if (!response.ok) {
      return dispatch({
        type: REMOVE_TODO_ERROR,
        payload: data,
      });
    }

    dispatch({ type: REMOVE_TODO_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};
