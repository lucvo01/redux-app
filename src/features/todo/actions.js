import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./reducer";
import apiService from "../../app/apiService";

let nextTodoId = 0;

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = {
      id: nextTodoId++,
      text,
      completed: false
    };
    const res = await apiService.post("/todos", todo);
    dispatch({type: ADD_TODO, payload: {id: todo.id, text}})
  } catch (error) {
    console.log(error);
  }
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};
