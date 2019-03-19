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

  const users = [
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

  const roles = [
    {
      value: 'Toastmaster',
      label: 'Toastmaster',
    },
    {
      value: 'Speaker',
      label: 'Speaker',
    },
    {
      value: 'Speaker Evaluator',
      label: 'Speaker Evaluator',
    },
    {
      value: 'Timer',
      label: 'Timer',
    },
    {
    value: 'AhCounter',
    label: 'AhCounter',
    },
    {
    value: 'Topic Master',
    label: 'Topic Master',
    },
    {
    value: 'Topic Speaker',
    label: 'Topic Speaker',
    },
    {
    value: 'Grammarian',
    label: 'Grammarian',
    },
    {
    value: 'General Evaluator',
    label: 'General Evaluator',
    },
  ];

class AddEvaluationReport extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todayDate:"2019-01-01",
            evaluationReport:{key:{memberName:'', eventId:''}, evaluatorName:'', count:'', report:'',evaluatorRole:'', memberRole:''},
            openDialog : false,
        }
    }

    handleClose = () => {
        this.setState({ openDialog: false });
      };

    submitCreateRequest = () => {
        console.log('Create Event Submitted :',this.state.evaluationReport);
        var evaluationReport = this.state.evaluationReport;
        var postHeaders = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.post('http://localhost:8080/toastmasterapi/evaluation/insertEvaluationReport', evaluationReport)
        .then(res => {
            console.log('Submitted and Response is :',res);
            console.log(res.data);
        })

    }

    handleChange = name => event => {
        var evaluationReport = this.state.evaluationReport;
        if(name === 'eventId' || name === 'memberName'){
            evaluationReport.key[name] = event.target.value;
        }else{
            evaluationReport[name]= event.target.value;
        }
        
        this.setState({ evaluationReport: evaluationReport });
      };

    
    handleCreateEvent = () => {
        this.setState({openDialog : true});
    };

    render(){    
        const { classes } = this.props; 
        return(
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleCreateEvent}>
                    Add Report
                </Button>
                <Dialog
                    title="Add Evalution Report"
                    modal={true}
                    open={this.state.openDialog}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Add Evaluation Report to the App</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please add the evaluation report as per your Role.
                        </DialogContentText>
                        {/* Text Field for Event Number */}
                        <TextField
                        id="standard-name"
                        label="Event Number"
                        className={classes.textField}
                        onChange={this.handleChange('eventId')}
                        value={this.state.evaluationReport.key.eventId}
                        margin="normal"
                        />

                        {/* Text Field for Count */}
                        <TextField
                        id="standard-name"
                        label="Count"
                        className={classes.textField}
                        onChange={this.handleChange('count')}
                        value={this.state.evaluationReport.count}
                        margin="normal"
                        />

                        {/* Selection Field for Toastmster Role */}
                        <TextField
                        id="memberName"
                        select
                        label="Member Name"
                        className={classes.textField}
                        value={this.state.evaluationReport.key.memberName}
                        onChange={this.handleChange('memberName')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Member"
                        margin="normal"
                        >
                        {users.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                        {/* Selection Field for Evaluator Name */}
                        <TextField
                        id="evaluatorName"
                        select
                        label="Evaluator Name"
                        className={classes.textField}
                        value={this.state.evaluationReport.evaluatorName}
                        onChange={this.handleChange('evaluatorName')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Evaluator Name"
                        margin="normal"
                        >
                        {users.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Evaluator Role */}
                        <TextField
                        id="evaluatorRole"
                        select
                        label="Evaluator Role"
                        className={classes.textField}
                        onChange={this.handleChange('evaluatorRole')}
                        value={this.state.evaluationReport.evaluatorRole}
                        
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Evaluator Role"
                        margin="normal"
                        >
                        {roles.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        {/* Selection Field for Member Role */}
                        <TextField
                        id="memberRole"
                        select
                        label="Member Role"
                        className={classes.textField}
                        value={this.state.evaluationReport.memberRole}
                        onChange={this.handleChange('memberRole')}
                        SelectProps={{
                            
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select Member Role"
                        margin="normal"
                        >
                        {roles.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                        <TextField
                        id="standard-multiline-flexible"
                        label="Evaluation Report"
                        multiline
                        rowsMax="8"
                        value={this.state.evaluationReport.report}
                        onChange={this.handleChange('report')}
                        className={classes.textField}
                        margin="normal"
                        />
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" onClick={this.submitCreateRequest}>
                                ADD
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
AddEvaluationReport.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddEvaluationReport);