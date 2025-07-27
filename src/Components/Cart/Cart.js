import { useSelector } from 'react-redux'
import './Cart.css';
import { useEffect, useState } from 'react';

export default function Cart() {

  //cartItems getting from the redux
  // const { cartItemId } = useSelector((state) => state.cartId);

  //products data getting the redux
  // const { productData } = useSelector((state) => state.products)
  const { productData, isLoading } = useSelector((state) => state.products)

  // const cartStoredId = JSON.parse(localStorage.getItem('cartIdLocal'));

  // console.log(cartStoredId,'local storage cart ids')
  
  // //cpoy of localStorage cartId's
  // const cartIds = cartStoredId.map(id => Number(id));

  // const cartProducts = productData.filter(product => cartIds.includes(Number(product.id)));

  // console.log(cartProducts,'cart products ids')

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
  if (!localStorage.getItem('cartIdLocal')) {
    localStorage.setItem('cartIdLocal', JSON.stringify([]));
  }
}, []);

useEffect(() => {
  const cartStoredId = JSON.parse(localStorage.getItem('cartIdLocal')) || [];

  if (productData.length > 0 && cartStoredId.length > 0) {
    const cartIds = cartStoredId.map(id => Number(id));
    const filtered = productData.filter(product => cartIds.includes(product.id));
    setCartProducts(filtered);
  }
}, [productData]);

  return (
    <>
    {isLoading ? <div className="loader loader-container"></div> :       <div className='cart-page-container'>
        <h2>🛒 Cart Products</h2>
        {cartProducts.length > 0 ? (
          cartProducts.map(product => (
            <div class="card cart-card-container">
              <div className="cart-img-container">
                <img src={product.image} className="card-img-top cart-image" alt="..." />
                <p className='quantity'>quantity : </p>
                <select className='quantity-selector'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <button className="oreder-button">oreder now</button>
              </div>
              <div className="card-body cart-body-container">
                <p className="card-title">Price : ₹{product.price}</p>
                <p className="card-text">Category : {product.category}</p>
                <p className="card-description">description : {product.description}</p>
                <p className="card-rating">rating : {product.rating.rate}</p>
                <p className="card-count">count : {product.rating.count}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>}

    </>
  )
}

