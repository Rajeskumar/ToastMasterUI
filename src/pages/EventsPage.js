import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ViewOrUpdateEvent from '../components/ViewOrUpdateEvent';
import {Fab, Icon } from '@material-ui/core';
import EvaluationReport from '../components/EvaluationReport';
import VisibilityIcon from '@material-ui/icons/Visibility';

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

class EventPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            selectedEvent : null,
            openViewDialog : false,
            openEvaluationDialog : false,
        }
    }

    hanldeEventClick = (e, data)=>{
        console.log('Clicked Event : ',data);
        this.setState({
            selectedEvent : data,
            openViewDialog : true,
        })
    }

    handleDialogClose = () => {
        this.setState({ openViewDialog: false, selectedEvent:null, openEvaluationDialog: false });
      };

    showEvaluation = (e, data) => {
        console.log('Selected EVentId : ', data.key.eventId);
        this.setState({
            selectedEvent : data,
            openEvaluationDialog : true,
        })
    }
    render(){
        return(
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                        <TableRow style={{backgroundColor:'#63F7E7'}}>
                            <CustomTableCell >Event Id</CustomTableCell>
                            <CustomTableCell align="center">Event Date</CustomTableCell>
                            <CustomTableCell align="center">ToastMaster</CustomTableCell>
                            <CustomTableCell align="center">Word Of the Day</CustomTableCell>
                            <CustomTableCell align="center">Theme of the Day</CustomTableCell>
                            <CustomTableCell align="center">Report</CustomTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.props.eventList.map(eventData => (
                            <TableRow  key={eventData.key.eventDate} hover>
                            <TableCell component="th" scope="row" onClick={(event)=>this.hanldeEventClick(event, eventData)}>
                            <Fab color="secondary"> <Icon fontSize="small">{eventData.key.eventId} </Icon> </Fab>
                            </TableCell>
                            <TableCell align="center">{eventData.key.eventDate}</TableCell>
                            <TableCell align="center">{eventData.toastmaster}</TableCell>
                            <TableCell align="center">{eventData.word_of_day}</TableCell>
                            <TableCell align="center">{eventData.theme_of_day}</TableCell>
                            <TableCell align="center"> <Fab color="secondary" onClick={(event) => this.showEvaluation(event, eventData)}> <VisibilityIcon /> </Fab> </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Paper>
                    {this.state.openViewDialog ? <ViewOrUpdateEvent selectedEvent={this.state.selectedEvent} handleDialogClose={this.handleDialogClose}
                    openViewDialog={this.state.openViewDialog}></ViewOrUpdateEvent>
                    : null}

                    {this.state.openEvaluationDialog ? <EvaluationReport selectedEventId={this.state.selectedEvent.key.eventId} handleDialogClose={this.handleDialogClose}
                    openEvaluationDialog={this.state.openEvaluationDialog}></EvaluationReport> : null}
            </div>
        );
    }
}

export default EventPage;