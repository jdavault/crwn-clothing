import './App.css';
import HomePage from './pages/homepage/homepage.component'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import { auth, createUserProifleDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null
ß
  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProifleDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }

      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
        </Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route 
          exact 
          path="/signin" 
          render={() => 
            this.props.currentUser ? ( <Redirect to='/' />) : (<SignInAndSignUp />)
        } />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
     currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
