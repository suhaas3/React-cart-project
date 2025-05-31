import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import RestarentList from "./Components/RestarentList/RestarentList";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import LoginButton from "./Components/LoginButton/LoginButton";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restarents' element={<RestarentList />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/login" element={<LoginButton/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

