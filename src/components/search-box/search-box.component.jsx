import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChenge }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChenge}
  />
);
