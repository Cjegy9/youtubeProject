import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello World!'
    };
  }

  render() {
    return (
      <div>{this.state.text}</div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));