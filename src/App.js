import React, {Component} from 'react';
import './App.css';
import HomePAge from "./pages/homepage/homepage.component";
import {Route, Switch, Redirect} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.componenet";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
      const {setCurrentUser} = this.props;
      this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);

              userRef.onSnapshot(snapshot => {
                  setCurrentUser({
                      id: snapshot.id,
                      ...snapshot.data()
                  })
              } )
          } else {
              setCurrentUser(userAuth);
          }
      })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

    render() {
      return (
          <div>
              <Header/>
              <Switch>
                  <Route exact path='/' component={HomePAge}/>
                  <Route path='/shop' component={ShopPage}/>
                  <Route exact path='/checkout' component={CheckoutPage}/>
                  <Route exact path='/signin' render={() =>
                      this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignOut/>)
                  }/>
              </Switch>
          </div>
      );
  }
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
