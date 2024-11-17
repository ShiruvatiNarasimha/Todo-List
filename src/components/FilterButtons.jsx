// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

// This function creates a component called FilterButtons
const FilterButtons = () => {
  // useDispatch is a hook that allows us to dispatch actions to the Redux store
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  // Function to handle the filter selection
  const handleFilter = (filter) => {
    // Dispatch the filterTodos action with the selected filter
    dispatch(filterTodos(filter));
  };

  return (
    // Return a div with flexbox layout
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
