import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";
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
    dispatch({ type: ADD_TODO, payload: { id: todo.id, text } });
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    const res = await apiService.get("/todos");
    console.log(res);
    dispatch({type: GET_TODOS, payload: res.data})
  } catch (error) {
    console.log(error);
  }
};

export const toggleTodo = (id, updatedData) => async (dispatch) => {
  try {
    const todo = {};
    const res = await apiService.put(`/todos/${id}`, updatedData);
    console.log(res);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// export const toggleTodo = (id) => {
//   return {
//     type: TOGGLE_TODO,
//     payload: { id }
//   };
// };

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};
