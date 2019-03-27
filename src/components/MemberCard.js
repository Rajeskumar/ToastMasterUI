import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography} from '@material-ui/core';
import ImagePraveen from '../assets/images/praveen.jpg'
import ImageParvathi from '../assets/images/parvathi.jpg'
import ImageBharani from '../assets/images/bharani.jpg'
import ImageJagan from '../assets/images/jagan.jpg'
import ImageKalai from '../assets/images/kalai.jpg'
import ImageRajesh from '../assets/images/rajesh.jpg'

const userFBId = new Map();
userFBId.set('Rajesh',ImageRajesh);
userFBId.set('Praveen',ImagePraveen);
userFBId.set('Parvathi',ImageParvathi);
userFBId.set('Kalai',ImageKalai);
userFBId.set('Jagan',ImageJagan);
userFBId.set('Bharani',ImageBharani);
class MemberCard extends React.Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div>
                <Card raised item>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Member">
                                {this.props.memberData.name.substring(0,1)}
                            </Avatar>
                        }
                        style={{background:'#75F9F3'}}
                        title={this.props.memberData.name}
                        subheader={this.props.memberData.shortName}
                        />
                
                    <CardMedia
                        style={{paddingTop:'50%', backgroundImage:`url(${userFBId.get(this.props.memberData.shortName)})`, height:'300px'}}
                        title={this.props.memberData.shortName}
                        />
                
                    <CardContent style={{background:'#75F9F3'}}>
                        <Typography variant="caption" >
                            Email : {this.props.memberData.email} <br/>
                            Mobile : {this.props.memberData.mobile}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default MemberCard;