import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import { auth } from "./components/firebase";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import { useStateValue } from "./components/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect <<<<<< POWERFUL
  // Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is logged in...

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
    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>> ", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Checkout page */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Login page */}
          <Route path="/login">
            <Login />
          </Route>
          {/* The is the default route */}
          {/* Home page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
