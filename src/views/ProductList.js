import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDevices } from '../services/Products.js';
import ProductCard from '../components/ProductCard.js';

export default function ProductList() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDevices();
      console.log(resp);
      setData(resp);
    };
    fetchData();
  }, []);
  {
    return (
      <div>
        <button onClick={() => setToggle(!toggle)}>List</button>
        <ul>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              toggle={toggle}
              productLine={item.line.name}
              productName={item.product.name}
              imgId={item.icon.id}
              imgDimensions={item.icon.resolutions[1]}
            />
          ))}
        </ul>
      </div>
    );
  }
}
