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
        <li key={id}>
          <div className="list">
            {/* <div className="img"> */}
            <img
              src={`https://static.ui.com/fingerprint/ui/icons/${imgId}_${imgDimensions[0][0]}x${imgDimensions[0][1]}.png`}
            />
            {/* </div> */}
            {/* <div className="productLine">
              <p>{productLine}</p>
            </div>
            <div className="productName">
              <p>{productName}</p>
            </div> */}
            {productLine} {productName}
          </div>
        </li>
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
