import React from 'react';
import axios from 'axios';

class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            memberList:[],
        }

        this.fetchData();
    }

    fetchData(){
        var that = this;
        // Make a request for a user with a given ID
        axios.get('http://localhost:8080/toastmasterapi/getMembers').then(function (response) {
        console.log(response);
        var memberList = response.data;
        that.setState({memberList: memberList});
        }).catch(function (error) {
        console.log(error);
        });
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default HomePage;