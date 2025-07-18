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

  const [elect,setSelect] = useState('All');
  const [filterProducts,setFilterProducts] =useState([]);
  const dispatch = useDispatch();
  const { productData, isLoading } = useSelector((state) => state.products)

  useEffect(() => {
      setSelect('All');
    dispatch(getApiData());
  }, [])

  useEffect(() => {
    
  },[elect, productData])

  return (
    <>

    <div className="options-header">
        <div className="category-option">
          <select onChange={(e) =>setSelect(e.target.value)}>
            <option>All</option>
            <option>men's clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
            <option>women's clothing</option>
          </select>
        </div>

          <div className="price-option">
          <select onChange={(e) =>setSelect(e.target.value)}>
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
              {productData?.map(productList => {
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
          </div>}
      </>
      );
}


      export default Products;