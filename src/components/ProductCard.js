import React from 'react';

export default function ProductCard({
  key,
  toggle,
  productLine,
  productName,
  imgId,
  imgDimensions,
}) {
  return (
    <>
      {toggle && (
        <div>
          <li key={key}>
            <img
              src={`https://static.ui.com/fingerprint/ui/icons/${imgId}_${imgDimensions[0]}x${imgDimensions[1]}.png`}
            />
            {productName} {productLine}
          </li>
        </div>
      )}
      {!toggle && (
        <div>
          <li key={key}>
            <img
              src={`https://static.ui.com/fingerprint/ui/icons/${imgId}_${imgDimensions[0]}x${imgDimensions[1]}.png`}
            />
            <h2>{productName}</h2> <p>{productLine}</p>
          </li>
        </div>
      )}
    </>
  );
}
