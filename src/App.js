import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe('pk_test_51KlvC1SDVQu2Xwvw1iFkS5kCAmn7mUD8EOttHJQor0zS2PDF9W6p7Scqb5H4r5p08dpHU5udYB3DK9yEuEyhzsZa000Xv03HSJ');

function App() {

  const [{}, dispatch] = useStateValue();

  

  useEffect(() => {
    // Will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>>", authUser);

      if (authUser) {
        // The user just logged in/the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="app">
      <Elements stripe={promise} element={[<Payment />]}>
      <Routes>
      <Route path='/' element={[<Header/>,<Home/>]}/>
      <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/payment' element={[<Header/>,<Payment/>]}/>
      </Routes>
      </Elements>
    </div>
    </Router>
  );
}

export default App;
