import React from 'react';
import './ProductCard.css';
export default function ProductCard({
  id,
  gridView,
  productLine,
  productName,
  imgId,
  imgDimensions,
}) {
  return (
    <>
      {!gridView && (
        <div className="list">
          <li key={id}>
            <img
              src={`https://static.ui.com/fingerprint/ui/icons/${imgId}_${imgDimensions[0][0]}x${imgDimensions[0][1]}.png`}
            />
            {productName} {productLine}
          </li>
        </div>
      )}
      {gridView && (
        <div className="card">
          <div className="img">
            <img
              src={`https://static.ui.com/fingerprint/ui/icons/${imgId}_${imgDimensions[2][0]}x${imgDimensions[2][1]}.png`}
            />
          </div>
          <h2>{productName}</h2> <p>{productLine}</p>
        </div>
      )}
    </>
  );
}
