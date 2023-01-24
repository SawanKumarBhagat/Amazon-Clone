import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe('pk_test_51MRfsPSG6cWEzTYmVHpDUf0CPqVc5dHWzF6m7gw4BHoBe2wTTy5JRkF68g4wXeKOqEU6gsrPuuy8q0fbmlL76DQW00JCqqiOxw');

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header /> <Home /></>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<><Header/><Checkout /></>}/>
          <Route 
            path="/payment" 
            element={<>
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </>}/>
          <Route path="/orders" element={<><Header/><Orders /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
