import React from "react";

require('./Projects.css');


export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className='Projects'>
        <h1 className='Projects__title'>Проекты</h1>
        <ul className='Projects__list'>
          <li>Проект 1</li>
          <li>Проект 2</li>
          <li>Проект 3</li>
        </ul>
      </div>
    );
  }
}
