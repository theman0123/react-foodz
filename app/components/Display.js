import React, { Component } from 'react';

import { container } from 'bootstrap-css-modules/css/container.css';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={container}>
            <div className={container}>

            <img src="http://news-entertainment.net/wp-content/uploads/2015/06/wpid-ryan-gosling-chicken-activist.jpg" />

            </div>
        <button>
          EDIT
        </button>
      </div>
    );
  }
}
