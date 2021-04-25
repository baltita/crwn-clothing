import React, {Component} from 'react';
import './App.css';
import HomePAge from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.componenet";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";
import {auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
      super();
      this.state = {
          currentUser: null,
      }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
      this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);

              userRef.onSnapshot(snapshot => {
                  this.setState({
                      currentUser: {
                          id: snapshot.id,
                          ...snapshot.data()
                      }
                  })
              } )
          } else {
              this.setState({currentUser: userAuth});
          }
      })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

    render() {
      return (
          <div>
              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path='/' component={HomePAge}/>
                  <Route exact path='/shop' component={ShopPage}/>
                  <Route exact path='/signin' component={SignInSignOut}/>
              </Switch>
          </div>
      );
  }
}

export default App;
