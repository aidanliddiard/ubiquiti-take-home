import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDevices } from '../services/Products.js';

export default function ProductList() {
  const [data, setData] = useState([]);

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
        <ul>
          {data.map((item) => (
            <li key={item.key}>
              <img src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_257x257.png`} />
              {item.line.name} {item.product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
