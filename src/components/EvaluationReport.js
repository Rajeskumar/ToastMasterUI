import React from 'react';
import {Dialog, Button, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@material-ui/core';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 18,
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);

class EvaluationReport extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            openDialog : props.openEvaluationDialog,
            evaluationData : null,
            isDataLoading : true,
        }

        this.fetchEvaluationData();
    }

    fetchEvaluationData(){
        var that = this;
  
  
        axios.all([
          axios.get('http://localhost:8080/toastmasterapi/evaluation/reportById/'+that.props.selectedEventId)
        ]).then(axios.spread(function (evaluationResponse) {
          //... but this callback will be executed only when both requests are complete.
          var evaluationList = evaluationResponse.data;
          console.log('Evaluation Data Fetched : ',evaluationList)
        //   eventList = _.sortBy(eventList, [(event)=>event.key.eventId]);
  
          that.setState({
            evaluationData : evaluationList,
            isDataLoading : false,
          });
        })).catch(function (error) {
          console.log(error);
          });
    }
    render(){
        return(
            <div>
                <Dialog
                    title="Evaluation Report"
                    modal={true}
                    open={this.state.openDialog}
                    onClose = {this.props.handleDialogClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="lg"
                    >
                    <DialogTitle id="form-dialog-title">Evaluation Report</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Evaluation Report for the Event : {this.props.selectedEventId}
                        </DialogContentText>
                        {!this.state.isDataLoading ? 
                            <Paper>
                                <Table>
                                    <TableHead>
                                    <TableRow style={{backgroundColor:'#63F7E7'}}>
                                        <CustomTableCell >Event Id</CustomTableCell>
                                        <CustomTableCell align="center">Evaluator Name</CustomTableCell>
                                        <CustomTableCell align="center">Evaluator Role</CustomTableCell>
                                        <CustomTableCell align="center">Member Name</CustomTableCell>
                                        <CustomTableCell align="center">Member Role</CustomTableCell>
                                        <CustomTableCell align="center">Evaluation Report</CustomTableCell>
                                        <CustomTableCell align="center">Count</CustomTableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {this.state.evaluationData.map(evaluationData => (
                                        <TableRow  key={evaluationData} hover>
                                        <TableCell component="th" scope="row">
                                            {evaluationData.key.eventId}
                                        </TableCell>
                                        <TableCell align="center">{evaluationData.evaluatorName}</TableCell>
                                        <TableCell align="center">{evaluationData.key.evaluatorRole}</TableCell>
                                        <TableCell align="center">{evaluationData.key.memberName}</TableCell>
                                        <TableCell align="center">{evaluationData.memberRole}</TableCell>
                                        <TableCell align="center">{evaluationData.report}</TableCell>
                                        <TableCell align="center">{evaluationData.count}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                            : "Loading Data"}
                        
                        <DialogActions>
                            <Button onClick={this.props.handleDialogClose} color="primary">
                                Cancel
                            </Button>
                            {/* <Button color="primary" onClick={this.submitUpdateRequest}>
                                Update
                            </Button> */}
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default EvaluationReport;