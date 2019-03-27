import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import * as _ from "lodash";


const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

class AhCounterTrend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartAhCounterData: null,
    }

    this.computeChartData();
  }

  computeChartData(){
      var chartData =[];
      var eventIdArr = [];
      var rawData = this.props.ahCounterReport;
      var eventArray = _.groupBy(rawData, 'key.eventId');
      console.log('EventArray :',eventArray);
      eventIdArr = Object.keys(eventArray);
      //TODO Need to re-visit the logic for performance issue.
      //Also need to check null when no daeta available for any
      eventIdArr.forEach(eventId => {
          var data = {};
          data.eventId = eventId;
          data.kalai = eventArray[eventId].find(obj=> obj.key.memberName=='Kalai').count;
          data.praveen = eventArray[eventId].find(obj=> obj.key.memberName=='Praveen').count;
          data.jagan = eventArray[eventId].find(obj=> obj.key.memberName=='Jagan').count;
          data.rajesh = eventArray[eventId].find(obj=> obj.key.memberName=='Rajesh').count;
          data.parvathi = eventArray[eventId].find(obj=> obj.key.memberName=='Parvathi').count;
          data.bharani = eventArray[eventId].find(obj=> obj.key.memberName=='Bharani').count;
          chartData.push(data);
      });
      this.state = {
        chartAhCounterData : chartData,
      };
      console.log('ChartAhCounterData : ', chartData);
  }
  render() {
    return (
      <Paper>
        {this.state.chartAhCounterData ? <Chart
          data={this.state.chartAhCounterData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Praveen"
            valueField="praveen"
            argumentField="eventId"
            color="#ffd700"
          />
          <BarSeries
            name="Kalai"
            valueField="kalai"
            argumentField="eventId"
            color="#c0c0c0"
          />
          <BarSeries
            name="Jagan"
            valueField="jagan"
            argumentField="eventId"
            color="#cd7f32"
          />
          <BarSeries
            name="Bharani"
            valueField="bharani"
            argumentField="eventId"
            color="#F9170C"
          />
          <BarSeries
            name="Parvathi"
            valueField="parvathi"
            argumentField="eventId"
            color="#5BF90C"
          />
          <BarSeries
            name="Rajesh"
            valueField="rajesh"
            argumentField="eventId"
            color="#0B5FF1"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="AhCounter Trend" />
          <Stack />
        </Chart>
        : 'Data Loading...'}
      </Paper>
    );
  }
}

export default AhCounterTrend;