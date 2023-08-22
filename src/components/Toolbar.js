import React from 'react';
import ProductLineFilter from './ProductLineFilter.js';
import './Toolbar.css';

export default function Toolbar({
  productLines,
  selectedProductLine,
  setSelectedProductLine,
  setGridView,
  gridView,
}) {
  console.log(gridView);
  return (
    <div className="toolbar">
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
  );
}
