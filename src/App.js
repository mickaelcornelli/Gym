import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Profil from './components/Profil'
import Musculation from './components/Musculation'
import Subscription from './components/Subscription'
import About from './components/About'
import {Switch, Route} from 'react-router-dom'
import RequireDataAuth from './helpers/require-data-auth';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={RequireDataAuth(Home)}/>
        <Route exact path="/login" component={RequireDataAuth(Login)}/>
        <Route exact path="/register" component={RequireDataAuth(Register)}/>
        <Route exact path="/logout" component={RequireDataAuth(Logout)}/>
        <Route exact path="/profil" component={RequireDataAuth(Profil)}/>
        <Route exact path="/activities" component={RequireDataAuth(Musculation)}/>
        <Route exact path="/subscription" component={RequireDataAuth(Subscription)}/>
        <Route exact path="/about" component={RequireDataAuth(About)}/>
      </Switch>
    </div>
  );
}

export default App;
