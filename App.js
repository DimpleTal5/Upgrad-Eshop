import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react';
import Navigation from 'C:\upgrad-eshop-app\src/components/NavigationBar';

const Home = () => <div>Home Page Content</div>;
const Login = () => <div>Login Page Content</div>;
const SignUp = () => <div>Sign Up Page Content</div>;
const AddProducts = () => <div>Add Products Page Content</div>;

const App = () => {
  const isLoggedIn = false; // Set to true for testing
  const isAdmin = true; // Set to true for testing

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {isLoggedIn && isAdmin && <Route path="/add-products" component={AddProducts} />}
      </Switch>
    </Router>
  );
};

export default App;