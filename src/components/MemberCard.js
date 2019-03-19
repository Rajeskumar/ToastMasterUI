import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography} from '@material-ui/core';

const userFBId = new Map();
userFBId.set('Rajesh','https://www.facebook.com/photo.php?fbid=582587065144597');
userFBId.set('Praveen','https://www.facebook.com/photo.php?fbid=1553262411387534');
userFBId.set('Parvathi','https://www.facebook.com/photo.php?fbid=1659200030781674');
userFBId.set('Kalai','https://www.facebook.com/photo.php?fbid=10215178158386347');
userFBId.set('Jagan','https://www.facebook.com/photo.php?fbid=10202612930540308');
userFBId.set('Bharani','https://www.facebook.com/photo.php?fbid=1479013952170080');
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
                        title={this.props.memberData.name}
                        subheader={this.props.memberData.shortName}
                        />
                    <CardMedia
                        style={{paddingTop:'50%'}}
                        image="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNnbujsYrhAhWr54MKHTobBroQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fnature%2F&psig=AOvVaw0VhPAkcnAoZ9AOL3l8yo0L&ust=1552953639756588"
                        title={this.props.memberData.shortName}
                        />
                    <CardContent>
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