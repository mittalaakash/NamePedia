import React, { useRef, useEffect } from 'react';
import './SearchBox.css';

const SearchBox = ({ inputChange }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className='search-container'>
      <input
        ref={ref}
        onChange={event => {
          inputChange(event.target.value);
        }}
        placeholder='Type Keyword'
        className='search-input'
      />
    </div>
  );
};

export default SearchBox;
