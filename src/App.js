import React from 'react';
import './App.css';
import axios from 'axios';
const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios({
      url: `${databaseUrl}/api/users`,
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
          <p>Project 3 Starter. Let's git it!</p>
        </header>
      </div>
    );
  }
}

export default App;
