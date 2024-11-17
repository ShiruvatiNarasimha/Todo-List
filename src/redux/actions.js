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

// Export a constant function called filterTodos that takes a filter parameter and returns an object with a type property set to FILTER_TODOS and a payload property set to the filter parameter
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

// Export a constant function called markAllCompleted that returns an object with a type property set to MARK_ALL_COMPLETED
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// Export a constant function called updateSearchTerm that takes a searchTerm parameter and returns an object with a type property set to UPDATE_SEARCH_TERM and a payload property set to the searchTerm parameter
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
