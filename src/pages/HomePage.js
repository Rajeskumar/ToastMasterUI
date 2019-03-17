import React from 'react';
import Typography from '@material-ui/core/Typography';

class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            memberList:[],
            eventList:[],
        }
    }

    render(){
        return(
            <div>
                <Typography variant='headline' align='center' gutterBottom>
                    Welcome to ToastMaster Event
                </Typography>
            </div>
        );
    }
}

export default HomePage;