import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    message: '',
  };
  componentDidMount() {
    fetch('/demo')
      .then((response) => response.json())
      .then((data) => this.setState({ message: data.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
