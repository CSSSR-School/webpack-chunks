import React from "react";
import { Link } from "react-router-dom";

require('./Navigation.css');

export default class Navigation extends React.PureComponent {
  render() {
    return (
      <nav className='Navigation'>
        <ul className='Navigation__list'>
          <li className='Navigation__item'><Link to='/'>Home</Link></li>
          <li className='Navigation__item'><Link to='/blog'>Blog</Link></li>
          <li className='Navigation__item'><Link to='/projects'>Projects</Link></li>
        </ul>
      </nav>
    )
  }
}