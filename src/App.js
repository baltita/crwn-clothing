import React from 'react';
import './App.css';
import HomePAge from "./pages/homepage/homepage.component";
import {Route} from "react-router-dom";

const HatsPage = () => (
    <div>
       <h1>
           HATS PAGE!
       </h1>
    </div>
)

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePAge} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </div>
  );
}

export default App;
