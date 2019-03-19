import React from 'react';
import {  Grid} from '@material-ui/core';
import MemberCard from '../components/MemberCard';


class MemberPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid container spacing={24} style={{padding:24}}>
                {this.props.memberList.map (member => {
                    return(
                      <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <MemberCard memberData ={member} />
                      </Grid>
                    );
                    }
                )}
            </Grid>
        );
    }
}

export default MemberPage;