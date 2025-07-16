import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import SignIn from "./Components/SignIn/SignIn";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Ekart from "./Components/Ekart/Ekart";
import Orders from "./Components/Orders/Orders";


function App() {

  const {isAuthenticate}= useSelector(state => state.auth)
  return (
    <>
      <Router>
        <NavBar />
        <main className="main-section">
        <Routes>
          <Route path='/home' element={isAuthenticate ? <Ekart/> : <Navigate to='/'/>}/>
          <Route path="/orders" element={isAuthenticate ? <Orders /> : <Navigate to='/' />}/>
          <Route path="/checkout" element={isAuthenticate ? <Checkout/> : <Navigate to='/'/>} />
          <Route path="/cart" element={isAuthenticate ? <Cart/> : <Navigate to='/'/>}/>
          <Route path="/signin" element={isAuthenticate ? <SignIn/> : <Navigate to='/'/>} />
          <Route path="/" element={<Login/>}/>
        </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

