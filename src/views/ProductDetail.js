import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min.js';
import { fetchDeviceDetails } from '../services/Products.js';
import { useState } from 'react';

export default function ProductDetail() {
  const { productName } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDeviceDetails(productName);

      //console.log(resp[0].line);
      setProduct(resp[0]);
      setLoading(false);
    };
    fetchData();
  }, [productName]);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <img
        src={`https://static.ui.com/fingerprint/ui/icons/${product.icon.id}_${product.icon.resolutions[4][0]}x${product.icon.resolutions[4][1]}.png`}
      />
      <ul>
        <li>Product line: {product.line.name}</li>
        <li>ID: {product.line.id}</li>
        <li>Name: {product.product.name}</li>
        <li>Short Name: {product.product.abbrev}</li>
        <li>Max. Power: </li>
        <li>Speed: </li>
        {
          //<li>Number of Ports: {product.unifi.network.numberOfPorts}</li>
        }
      </ul>
    </div>
  );
}
