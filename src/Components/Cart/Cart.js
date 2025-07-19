import { useSelector } from 'react-redux'
import './Cart.css';

export default function Cart() {

  //cartItems getting from the redux
  const { cartItemId } = useSelector((state) => state.cartId);

  //products data getting the redux
  const { productData } = useSelector((state) => state.products)

  console.log(productData, 'products data');

  console.log(cartItemId, "cart item id")

  const cartIds = cartItemId?.map(item => item.cartId);

  const cartProducts = productData.filter(product => cartIds.includes(product.id))

  return (
    <>
      <div>
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
    </div>
    </>
  )
}

