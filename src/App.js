import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import MemberPage from './pages/MemberPage.js';
import {BrowserRouter as Router, Route, Link, Switch, Redirec} from "react-router-dom";
import axios from 'axios';
import EventPage from './pages/EventsPage';
import * as _ from "lodash";
import Trends from './pages/Trends';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          memberList:[],
          eventList:[],
          ahCounterReport : null,
          timerReport : null,
          grammarReport : null,
          isDataLoading : true,
      }

      this.fetchData();
  }
  fetchData(){
      var that = this;


      axios.all([
        axios.get('http://localhost:8080/toastmasterapi/toastMaster/getMembers'),
        axios.get('http://localhost:8080/toastmasterapi/toastMaster/getEvents'),
        axios.get('http://localhost:8080/toastmasterapi/evaluation/reportByEvaluatorRole/AhCounter'),
        axios.get('http://localhost:8080/toastmasterapi/evaluation/reportByEvaluatorRole/Timer'),
        axios.get('http://localhost:8080/toastmasterapi/evaluation/reportByEvaluatorRole/Grammarian')
      ]).then(axios.spread(function (memberResponse, eventResponse, ahCounterResponse, timerResponse, grammarResponse) {
        //... but this callback will be executed only when both requests are complete.
        var memberList = memberResponse.data;
        var eventList = eventResponse.data;
        var ahCounterReport = ahCounterResponse.data;
        var timerReport = timerResponse.data;
        var grammarReport = grammarResponse.data;
        console.log('AhCounterReport : ',ahCounterReport);
        eventList = _.sortBy(eventList, [(event)=>event.key.eventId]);

        that.setState({
          memberList: memberList, 
          eventList : eventList,
          ahCounterReport : ahCounterReport,
          timerReport : timerReport,
          grammarReport : grammarReport,
          isDataLoading: false
        });
      })).catch(function (error) {
        console.log(error);
        });
  }
  render() {
    return (
      <div className="App">
        {!this.state.isDataLoading ? <Router>
          <Header/>
          <div>
            <Switch>
              <Route exact path="/userProfile" render={(props) => <MemberPage {...props} memberList={this.state.memberList} />}/>
              <Route exact path="/events" render={(props) => <EventPage {...props} eventList={this.state.eventList} />}/>
              <Route exact path="/trends" render={(props) => <Trends {...props} ahCounterReport={this.state.ahCounterReport}
              timerReport={this.state.timerReport} />}/>
              <Route path="/" component = {HomePage} />
            </Switch>
          </div>
        </Router>
        : "Loading..."}
        
        <Footer style={{background:'#0D5DEA'}} />
      </div>
    );
  }
}

export default App;
