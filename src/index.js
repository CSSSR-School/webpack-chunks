import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

require('./index.css');

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
