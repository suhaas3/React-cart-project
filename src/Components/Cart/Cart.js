import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {

  const [productsList, setProductList] = useState([]);
  async function getApiData() {
    const aipData = await axios.get('https://fakestoreapi.com/products');

    const response = aipData.data;
    setProductList(response);
    console.log(response, 'API data get from Url')
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          {productsList.map((product) => {
            return (
                <div class="card" style={{ width: '18rem' }}>
                  <img src={product.image} class="img" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Title : {product.title}</h5>
                    <h5 class="card-text">Category : {product.category}</h5>
                    <h5 className="price-cents">Price : {product.price}</h5>
                    <h5 className="ratings-rate">Ratings : {product.rating
                      .rate}</h5>
                    <h5 className="ratings-count">Count : {product.rating.count}</h5>
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