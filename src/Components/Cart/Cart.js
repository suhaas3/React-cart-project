import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cart.css';

function Cart() {

  const [productsList, setProductList] = useState([]);
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState();
  const [filterProducts, setFilterProducts] = useState([]);

  async function getApiData() {
    const aipData = await axios.get('https://fakestoreapi.com/products');

    const response = aipData.data;
    setProductList(response);
  }


  useEffect(() => {
    getApiData();
    setCategory('All');
    setPrice();
  }, [])


  // useEffect(() => {
  //  getApiData();
  //    const filProducts = productsList.filter((fData) =>
  //     category === 'All' ? true : fData.category === category
  //   );
  //   setFilterProducts(filProducts);

  // }, [category, price, productsList])

useEffect(() => {
  let filtered = [...productsList];

  // Filter by category
  if (category !== 'All') {
    filtered = filtered.filter(product => product.category === category);
  }

  // Filter by price
  if (price !== 'All') {
    filtered = filtered.filter(product => {
      const p = product.price;
      if (price === '1 - 100') return p >= 1 && p <= 100;
      if (price === '101 - 300') return p > 100 && p <= 300;
      if (price === '301 - 500') return p > 300 && p <= 500;
      if (price === '501 above') return p > 500;
      return true;
    });
  }

  setFilterProducts(filtered);
}, [category, price, productsList]);


  function getCategory(event) {
    setCategory(event.target.value)
  }

  function getPrice(event) {
    setPrice(event.target.value);
  }

  return (
    <>
      <div className="options-header">
        <div className="category-option">
          <select onChange={getCategory}>
            <option>All</option>
            <option>men's clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
            <option>women's clothing</option>
          </select>
        </div>

        <div className="price-option">
          <select onChange={getPrice}>
            <option>1 - 100</option>
            <option>101 - 300</option>
            <option>301 - 500</option>
            <option>501 above</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row row-container">
          {filterProducts.map((product) => {
            return (
              <div className="card card-body-container" style={{ width: '18rem' }}>
                <div className="image-head">
                  <img src={product.image} className="img img-container" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Title : {product.title}</h5>
                  <h5 className="card-text">Category : {product.category}</h5>
                  <h5 className="price-cents">Price : {product.price}</h5>
                  <h5 className="ratings-rate">Ratings : {product.rating
                    .rate}</h5>
                  <h5 className="ratings-count">Count : {product.rating.count}</h5>
                  <button className="order-button">Order Now</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}


export default Cart;