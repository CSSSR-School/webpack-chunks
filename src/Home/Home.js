import React from "react";

require('./Home.css');


export default class Home extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      data: null
    }

    this.handleLoadClick = this.handleLoadClick.bind(this);
  }

  handleLoadClick() {
    import(/* webpackChunkName: "awesome-data" */'../utils/get-awesome-data')
      .then(({ getAwesomeText }) => {
        this.setState({
          data: getAwesomeText()
        })
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  render() {
    const data = this.state.data;

    return (
      <div className='Home'>
        <h1 className='Home__title'>Добро пожаловать!</h1>
        {!data ?
          <button className='Home__load' onClick={this.handleLoadClick}>Load awesome data</button> :
          <pre className='Home__data' dangerouslySetInnerHTML={{ __html: data }}></pre>
        }
      </div>
    );
  }
}
