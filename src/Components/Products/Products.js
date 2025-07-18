import React, { useEffect, useState } from "react";
import axios from "axios";
import './Products.css';

function Products() {

  const [productsData, setProductsData] = useState([]);

  async function getApiData() {
    const response = await axios.get("https://fakestoreapi.com/products")

    setProductsData(response.data)
  }

  useEffect(() => {
    getApiData();
  }, [])

  console.log(productsData, 'produts dtassss')

  return (
    <>
      <div className="container">
        <div className="row">
          {productsData?.map(productList => {
            return (
              <div class="card card-container">
                <div className="img-container">
                <img src={productList.image} className="card-img-top image" alt="..." />
                </div>
                <div className="card-body">
                  <p className="card-title">Price :{productList.price}</p>
                  <p className="card-text">Category :{productList.category}</p>
                  <button className="oreder-button">oredr now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}


export default Products;