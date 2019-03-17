import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import MemberPage from './pages/MemberPage.js';
import {BrowserRouter as Router, Route, Link, Switch, Redirec} from "react-router-dom";
import axios from 'axios';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          memberList:[],
          eventList:[],
      }

      this.fetchData();
  }
  fetchData(){
      var that = this;
      // Make a request to get all users from DB
      axios.get('http://localhost:8080/toastmasterapi/toastMaster/getMembers').then(function (response) {
      console.log(response);
      var memberList = response.data;
      that.setState({memberList: memberList});
      }).catch(function (error) {
      console.log(error);
      });

      axios.get('http://localhost:8080/toastmasterapi/toastMaster/getEvents').then(function (response) {
      console.log(response);
      var eventList = response.data;
      that.setState({eventList: eventList});
      }).catch(function (error) {
      console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Router>
          <div>
            <Switch>
              <Route path="/userProfile" render={(props) => <MemberPage {...props} memberList={this.state.memberList} />}/>
              <Route path="/" component = {HomePage} />
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
