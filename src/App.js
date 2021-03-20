import './App.css';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useState } from 'react';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Profile from './components/Profile/Profile';

function App() {
  const [user, setUser] = useState({ isLoggedIn: false });

  return (
    <UserProvider value={[user, setUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <ComingSoon page="Blog" />
          </Route>
          <Route path="/contact">
            <ComingSoon page="Contact" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/:strID">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
