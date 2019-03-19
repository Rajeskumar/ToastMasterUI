import React from 'react';
import {Dialog, TextField, Button, MenuItem, withStyles, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

  const currencies = [
    {
      value: 'Rajesh',
      label: 'Rajesh',
    },
    {
      value: 'Praveen',
      label: 'Praveen',
    },
    {
      value: 'Kalai',
      label: 'Kalai',
    },
    {
      value: 'Jagan',
      label: 'Jagan',
    },
    {
    value: 'Parvathi',
    label: 'Parvathi',
    },
    {
    value: 'Bharani',
    label: 'Bharani',
    },
  ];

class CreateEvent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todayDate:"2019-01-01",
            eventRequest:{key:{eventDate:'', eventId:2}, word_of_day:'', theme_of_day:'', toastmaster:'',speaker_1:'', speaker_2:'',
            spkr_evaluator_1:'',spkr_evaluator_2:'', topic_master:'',timer_report:'', ahCounter_report:'', gnrl_evaluator:'', grammarian:''},
            openCreateEventDialog : false,
        }
        this.setCurrentDate();
    }

    setCurrentDate(){
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        this.setState({todayDate: date});
    }
    handleClose = () => {
        this.setState({ openCreateEventDialog: false });
      };

    submitCreateRequest = () => {
        console.log('Create Event Submitted :',this.state.eventRequest);
        var eventRequest = this.state.eventRequest;
        var postHeaders = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.post('http://localhost:8080/toastmasterapi/toastMaster/createEvent', eventRequest)
        .then(res => {
            console.log('Submitted and Response is :',res);
            console.log(res.data);
        })

    }

    handleChange = name => event => {
        var eventRequest = this.state.eventRequest;
        if(name === 'eventDate'){
            eventRequest.key.eventDate = event.target.value;
        }else{
            eventRequest[name]= event.target.value;
        }
        
        this.setState({ eventRequest: eventRequest });
      };

    
    handleCreateEvent = () => {
        this.setState({openCreateEventDialog : true});
    };

    render(){    
        const { classes } = this.props; 
        return(
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleCreateEvent}>
                    Create Event
                </Button>
                <Dialog
                    title="Create Toastmaster Event"
                    modal={true}
                    open={this.state.openCreateEventDialog}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Create Toastmaster Event</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you the nominated Toastmaster ?. Kudos. Please create the event.
                        </DialogContentText>
                        {/* Text Field for Theme of the Day */}
                        <TextField
                        id="standard-name"
                        label="Theme of the Day"
                        className={classes.textField}
                        onChange={this.handleChange('theme_of_day')}
                        value={this.state.eventRequest.theme_of_day}
                        margin="normal"
                        />

                        {/* Text Field for Word of the Day */}
                        <TextField
                        id="standard-name"
                        label="Word of the Day"
                        className={classes.textField}
                        onChange={this.handleChange('word_of_day')}
                        value={this.state.eventRequest.word_of_day}
                        margin="normal"
                        />

                        {/* Selection Field for Event Date */}
                        <TextField
                            id="eventDate"
                            label="Event Date"
                            type="date"
                            defaultValue={this.state.eventRequest.key.eventDate}
                            onChange={this.handleChange('eventDate')}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />

                        {/* Selection Field for Toastmster Role */}
                        <TextField
                        id="toastmaster"
                        select
                        label="Toastmaster"
                        className={classes.textField}
                        value={this.state.eventRequest.toastmaster}
                        onChange={this.handleChange('toastmaster')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Toastmaster"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                        {/* Selection Field for Speaker 1 */}
                        <TextField
                        id="speaker1"
                        select
                        label="Speaker 1"
                        className={classes.textField}
                        value={this.state.eventRequest.speaker_1}
                        onChange={this.handleChange('speaker_1')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Speaker 1"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Speaker 2 */}
                        <TextField
                        id="speaker2"
                        select
                        label="Speaker 2"
                        className={classes.textField}
                        onChange={this.handleChange('speaker_2')}
                        value={this.state.eventRequest.speaker_2}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Speaker 2"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Evaluator 1 */}
                        <TextField
                        id="evaluator1"
                        select
                        label="Evaluator 1"
                        className={classes.textField}
                        value={this.state.eventRequest.spkr_evaluator_1}
                        onChange={this.handleChange('spkr_evaluator_1')}
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Evaluator 1"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Evaluator 2 */}
                        <TextField
                        id="evaluator2"
                        select
                        label="Evaluator 2"
                        className={classes.textField}
                        onChange={this.handleChange('spkr_evaluator_2')}
                        value={this.state.eventRequest.spkr_evaluator_2}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Evaluator 2"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Topicmaster */}
                        <TextField
                        id="topicmaster"
                        select
                        label="TopicMaster"
                        className={classes.textField}
                        onChange={this.handleChange('topic_master')}
                        value={this.state.eventRequest.topic_master}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select TopicMaster"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Grammarian*/}
                        <TextField
                        id="grammarian"
                        select
                        label="Grammarian"
                        className={classes.textField}
                        onChange={this.handleChange('grammarian')}
                        value={this.state.eventRequest.grammarian}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Grammarian"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for AhCounter Role */}
                        <TextField
                        id="ahCounter"
                        select
                        label="AhCounter Role"
                        className={classes.textField}
                        onChange={this.handleChange('ahCounter_report')}
                        value={this.state.eventRequest.ahCounter_report}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select AhCounter Role"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Timer Role */}
                        <TextField
                        id="timer"
                        select
                        label="Timer Role"
                        className={classes.textField}
                        onChange={this.handleChange('timer_report')}
                        value={this.state.eventRequest.timer_report}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Timer Role"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for General Evaluator */}
                        <TextField
                        id="gnrlEvaluator"
                        select
                        label="General Evaluator"
                        className={classes.textField}
                        value={this.state.eventRequest.gnrl_evaluator}
                        onChange={this.handleChange('gnrl_evaluator')}
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select General Evaluator"
                        margin="normal"
                        >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" onClick={this.submitCreateRequest}>
                                Create
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateEvent);