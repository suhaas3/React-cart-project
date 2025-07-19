import React, { useEffect, useState } from "react";
// import axios from "axios";
import './Products.css';
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../../Redux-tooltik/Reducers/ProductsSlice";

function Products() {

  // const [productsData, setProductsData] = useState([]);

  // async function getApiData() {
  //   const response = await axios.get("https://fakestoreapi.com/products")

  //   setProductsData(response.data)
  // }

  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState('All');
  const [filterProducts, setFilterProducts] = useState([]);
  const [addedToCartId, setAddedToCartId] = useState(null);

  const dispatch = useDispatch();
  const { productData, isLoading } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getApiData());
    setCategory('All');
    setPrice('All');
  }, [dispatch])

  useEffect(() => {
    let filtered = [...productData];

    if (category !== 'All') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (price !== 'All') {
      filtered = filtered.filter(product => {
        const p = product.price;
        if (price === '1 - 100') return p >= 1 && p <= 100;
        if (price === '101 - 300') return p > 101 && p <= 300;
        if (price === '301 - 500') return p > 301 && p <= 500;
        if (price === '501 above') return p > 501;
        return true;
      })
    }

    setFilterProducts(filtered);
  }, [productData, category, price])

  function addToCart(productId) {
  setAddedToCartId(productId);

  // Remove message after 2 seconds
  setTimeout(() => {
    setAddedToCartId(null);
  }, 2000);
}

  return (
    <>
      <div className="options-header">
        <div className="category-option">
          <p className="option-heading">select ur category</p>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>men's clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
            <option>women's clothing</option>
          </select>
        </div>

        <div className="price-option">
          <p className="option-heading">select price</p>
          <select onChange={(e) => setPrice(e.target.value)}>
            <option>All</option>
            <option>1 - 100</option>
            <option>101 - 300</option>
            <option>301 - 500</option>
            <option>501 above</option>
          </select>
        </div>
      </div>

      {isLoading ? <div className="loader loader-container"></div> : <div className="container">
        <div className="row">
          {filterProducts?.map(productList => {
            return (
              <div class="card card-container">
                <div className="img-container">
                  <img src={productList.image} className="card-img-top image" alt="..." />
                </div>
                <div className="card-body">
                  <p className="card-title">Price :{productList.price}</p>
                  <p className="card-text">Category :{productList.category}</p>
                  {addedToCartId === productList.id && (
                    <p style={{ color: "green", marginBottom: "8px" }}>✅ Added</p>
                  )}
                  <button className="oreder-button" data-product-id={productList.id} onClick={() => addToCart(productList.id)}>add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>}
    </>
  );
}


export default Products;