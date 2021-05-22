import React from 'react';

// Search input field page component.
const SearchBar = ({ keyword, onChange }) => {
 return (
  <input
   className="form-control form-control-lg"
   key="random1"
   value={keyword}
   placeholder={'Search item'}
   onChange={(e) => onChange(e.target.value)}
  />
 );
};

export default SearchBar;
