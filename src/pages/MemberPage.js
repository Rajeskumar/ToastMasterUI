import React from 'react';
import { Card, CardHeader, Avatar, IconButton, CardMedia, Grid, Paper} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import red from '@material-ui/core/colors/red';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class MemberPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        return(
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                <Grid container justify="center" spacing={20}>
                {this.props.memberList.map (member => {
                    return(
                    <Grid item>
                        <Paper>
                        <Card raised = {true} className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Member" className={classes.avatar}>
                                        P
                                    </Avatar>
                                }
                                action={
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={member.name}
                                subheader={member.shortName}
                                />
                            <CardMedia
                                className={classes.media}
                                image="/src/assets/images/Toastmaster_Image.png"
                                title={member.shortName}
                                />
                        </Card>
                        </Paper>
                    </Grid>);
                    }
                )}
                </Grid>
                </Grid>
            </Grid>
        );
    }
}

MemberPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MemberPage);