import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProductLines, filterDevicesByProductLine } from '../services/Products.js';
import ProductCard from '../components/ProductCard.js';
import './ProductList.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';
import Toolbar from '../components/Toolbar.js';

export default function ProductList() {
  const [data, setData] = useState([]);
  const [gridView, setGridView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productLines, setProductLines] = useState([]);
  const [selectedProductLine, setSelectedProductLine] = useState('All');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const lines = await fetchProductLines();
      setProductLines(['All', ...lines]);
      const resp = await filterDevicesByProductLine(selectedProductLine, searchInput);
      console.log(resp);
      setData(resp);
      setLoading(false);
    };
    fetchData();
  }, [selectedProductLine, searchInput]);
  {
    if (loading) return <p>Loading...</p>;
    return (
      <div>
        <Toolbar
          productLines={productLines}
          selectedProductLine={selectedProductLine}
          setSelectedProductLine={setSelectedProductLine}
          setGridView={setGridView}
          gridView={gridView}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <div className={gridView ? 'cards' : 'list'}>
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ProductCard
                key={item.id}
                id={item.id}
                gridView={gridView}
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
