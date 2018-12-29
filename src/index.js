import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Loadable from 'react-loadable';

import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

require('./index.css');

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'./Home/Home'),
  loading: Loading,
});

const Blog = Loadable({
  loader: () => import(/* webpackChunkName: "blog" */'./Blog/Blog'),
  loading: Loading,
});

const Projects = Loadable({
  loader: () => import(/* webpackChunkName: "projects" */'./Projects/Projects'),
  loading: Loading,
});

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
