import React from 'react';
import './App.css';
import HomePAge from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.componenet";

function App() {
  return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={HomePAge} />
              <Route exact path='/shop' component={ShopPage} />
          </Switch>
      </div>
  );
}

export default App;
