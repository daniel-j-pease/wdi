import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      something: 'something else'
    }
  }

  render() {
    return(
      <div>
        <h1>hi!</h1>
      </div>
    )
  }
}
