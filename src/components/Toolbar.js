import React from 'react';
import ProductLineFilter from './ProductLineFilter.js';
import './Toolbar.css';

export default function Toolbar({
  productLines,
  selectedProductLine,
  setSelectedProductLine,
  setGridView,
  gridView,
  setSearchInput,
  searchInput,
}) {
  return (
    <div className="toolbar">
      <div>
        <input
          type="search"
          placeholder="Search here"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>
      <div className="right">
        <img
          src={!gridView ? '/ListActive.png' : '/ListDefault.png'}
          onClick={() => setGridView(false)}
        />
        <img
          src={gridView ? '/GridActive.png' : '/GridDefault.png'}
          onClick={() => setGridView(true)}
        />
        <ProductLineFilter
          productLines={productLines}
          selectedProductLine={selectedProductLine}
          setSelectedProductLine={setSelectedProductLine}
        />
      </div>
    </div>
  );
}
