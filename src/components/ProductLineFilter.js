import React from 'react';

export default function ProductLineFilter({
  productLines,
  selectedProductLine,
  setSelectedProductLine,
}) {
  return (
    <div>
      <h5>Product Line</h5>
      <select value={selectedProductLine} onChange={(e) => setSelectedProductLine(e.target.value)}>
        {productLines.map((line) => (
          <option key={line}>{line}</option>
        ))}
      </select>
    </div>
  );
}
