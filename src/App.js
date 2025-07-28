import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import SignIn from "./Components/SignIn/SignIn";
// import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Ekart from "./Components/Ekart/Ekart";
import Orders from "./Components/Orders/Orders";
import Products from "./Components/Products/Products";


function App() {

  const {isAuthenticate}= useSelector(state => state.auth)
  return (
    <>
      <Router>
        <NavBar />
        <main className="main-section">
        <Routes>
          <Route path='/home' element={<Ekart/>}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/signin" element={<SignIn/>} />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

