import React from 'react';
import './App.css';
import axios from 'axios';
const herokuUrl = 'https://project3-backend-test.herokuapp.com'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios({
      url: `${herokuUrl}/api/users`,
      method: 'get'
    })
      .then(users => {
        console.log(users)
        this.setState({ users })
      })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App" >
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>Test</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
