// actions.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

// Action creator for adding a new todo
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// Export a function called toggleTodo that takes an id as a parameter and returns an object with a type and payload property
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Export a function called removeTodo that takes an id as a parameter and returns an object with a type and payload property
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

// Export a function called markCompleted that takes an id as a parameter and returns an object with a type and payload property
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

// Export a function called markIncomplete that takes an id as a parameter and returns an object with a type and payload property
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
