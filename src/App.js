import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../src/App.css'
import Nav from './Component/Layout/Nav';
import User from './Component/User/User';
import SingleUser from './Component/User/SingleUser';
import Search from './Component/User/Search';
import About from './Component/Pages/about';
import Alert from './Component/Layout/Alert';

import { async } from 'q';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user:{},
      repos: [],
      loading: false,
      alert: null

    }
  }

  SearchUser = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false })
    console.log(res.data.items)

  }


  // clear clearUser

  clearUser =() => this.setState({user : [], loading :false});

  // set Alert
  setAlert = (msg, type) => {
    this.setState({alert : {msg , type} })

    setTimeout(() => this.setState({alert : null}), 5000)
  }
  // get single github  user

  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false })
  }

  // get repos 

  getRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}/repos?pre_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false })
  }

  render() {
    const {loading, users, user, repos} = this.state;
    return (
      <Router>
        <div>
          <Nav icon={"fa fa-github"} />
          <Switch>
            <Route exact path="/">
              <div className="container">
                <Alert alert={this.state.alert} />
                <Search 
                  SearchUser={this.SearchUser} 
                  clearUser={this.clearUser} 
                  showClear={users.length > 0  ? true : false}
                  setAlert={this.setAlert}
                  />
              </div>
              <User users={users} loading={loading} />
            </Route>

            <Route exact path="/user/:login" render={props => (
              <SingleUser  
                {...props} 
                getUser={this.getUser} 
                loading={loading} 
                user={user}
                getUserRepos={this.getRepos}
                repos={repos}/>
            )}/>

            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;