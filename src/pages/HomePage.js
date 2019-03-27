import React from 'react';
import Typography from '@material-ui/core/Typography';
import BackGroundImage from '../assets/images/toastmaster_Image.png'
import { Zoom } from '@material-ui/core';

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
                <div style={{background:'#100e17', height:'800px', backgroundImage:`url(${BackGroundImage})`}}>
                    <Zoom in={true} style={{ transitionDelay: '400ms' }}>
                        <Typography variant='h2' align='center' gutterBottom>
                            Welcome to Toastmaster Events
                        </Typography>
                    </Zoom>
                </div>
            </div>
        );
    }
}

export default HomePage;