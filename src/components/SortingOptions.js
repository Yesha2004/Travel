// SortingOptions.js
import React from 'react';

const SortingOptions = ({ onSortChange }) => {
  return (
    <div className="sorting-options">
      <label>
        Sort By:
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">Select...</option>
          <option value="season">Season</option>
          <option value="budget">Budget</option>
          <option value="country">Country</option>
        </select>
      </label>
    </div>
  );
};

export default SortingOptions;

