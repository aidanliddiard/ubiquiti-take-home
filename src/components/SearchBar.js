import React from 'react';

export default function SearchBar({ searchInput, setSearchInput }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </div>
  );
}
