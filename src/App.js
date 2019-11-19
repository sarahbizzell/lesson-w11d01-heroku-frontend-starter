import React from 'react';
import './App.css';
import axios from 'axios';
const databaseUrl = process.env.HEROKU_DB_URL

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios({
      url: `${databaseUrl}api/users`,
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
          <h1>Project 3 Starter. Let's git it!</h1>
        </header>
      </div>
    );
  }
}

export default App;
