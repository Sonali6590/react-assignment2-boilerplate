import React from 'react';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Dashboard from './Components/dashboard/Dashboard';
import ReadNow from './Components/readNow/ReadNow';

import { Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

class App extends React.Component {

  constructor(prop) {
    super(prop);
    this.token = localStorage.getItem("token");
  }

  render() {
    return <div className="App">
      <Grid>
        <Header></Header>
        <Router>
          <Route exact path='/' component={() => <Redirect to='/login'></Redirect>} />
          <Route exact path='/login' component={() => <Login />} />
          <Route exact path='/register' component={() => <Register />} />
          <Route exact path='/dashboard' component={() => <Dashboard />} />
          <Route exact path='/readnow' component={() => <ReadNow />} />
        </Router>
        <Footer></Footer>
      </Grid>
    </div>// please add your code
  }

}
export default App;
