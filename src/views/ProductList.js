import React from 'react';
import { useState, useEffect } from 'react';
import {
  fetchDevices,
  fetchProductLines,
  filterDevicesByProductLine,
} from '../services/Products.js';
import ProductCard from '../components/ProductCard.js';
import './ProductList.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';
import ProductLineFilter from '../components/ProductLineFilter.js';

export default function ProductList() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [productLines, setProductLines] = useState([]);
  const [selectedProductLine, setSelectedProductLine] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const lines = await fetchProductLines();
      setProductLines(['All', ...lines]);
      const resp = await filterDevicesByProductLine(selectedProductLine);
      setData(resp);
      setLoading(false);
    };
    fetchData();
  }, [selectedProductLine]);
  {
    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <ProductLineFilter
          productLines={productLines}
          selectedProductLine={selectedProductLine}
          setSelectedProductLine={setSelectedProductLine}
        />
        <button onClick={() => setToggle(!toggle)}>List</button>
        <div className={toggle ? 'list' : 'cards'}>
          {data.map((item) => (
            <Link key={item.id} to={`/${item.id}`}>
              <ProductCard
                key={item.id}
                id={item.id}
                toggle={toggle}
                productLine={item.line.name}
                productName={item.product.name}
                imgId={item.icon.id}
                imgDimensions={item.icon.resolutions}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
