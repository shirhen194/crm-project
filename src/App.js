import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Clients from './components/clients/Clients'
import Actions from './components/actions/Actions'
import Analytics from './components/Analytics'

class App extends Component {

  render() {
    return (
      <Router>
    <div>
      <ul id="main-links">
          {/* Main Links */}
          <li><Link to="/clients" onClick={this.highlight}>Clients </Link></li>
          <li><Link to="/actions">Actions </Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
        </ul>
         {/* Routes go here v */}
          <Route path="/clients" exact component={Clients} />
          <Route path="/actions" exact component={Actions}/>
          <Route path="/analytics" exact component={Analytics}/>
        {/* Routes go here ^ */}
    </div>
    </Router>
    );
  }
}

export default App;
