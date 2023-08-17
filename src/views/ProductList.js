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
    return <div>ProductList</div>;
  }
}
