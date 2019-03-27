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
import AhCounterTrend from '../components/AhCounterTrend';
import TimerTrend from '../components/TimerTrend';


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

class Trends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartAhCounterData: null,
    }

  }

  render() {
    return (
    <div>
        <AhCounterTrend ahCounterReport={this.props.ahCounterReport}/>
        <TimerTrend timerReport={this.props.timerReport} />
    </div>
    );
  }
}

export default Trends;