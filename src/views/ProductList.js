import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDevices } from '../services/Products.js';
import ProductCard from '../components/ProductCard.js';
import './ProductList.css';

export default function ProductList() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDevices();
      setData(resp);
    };
    fetchData();
  }, []);
  {
    return (
      <div>
        <button onClick={() => setToggle(!toggle)}>List</button>
        <div className={toggle ? 'list' : 'cards'}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              toggle={toggle}
              productLine={item.line.name}
              productName={item.product.name}
              imgId={item.icon.id}
              imgDimensions={item.icon.resolutions}
            />
          ))}
        </div>
      </div>
    );
  }
}
