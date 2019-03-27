import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import TrendIcon from '@material-ui/icons/TrendingUp';
import ContactIcon from '@material-ui/icons/Contacts';
import GroupIcon from '@material-ui/icons/Group';
import {Link} from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MenuDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer('left', true)}/>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <div className={classes.list}>
              <List>
                <ListItem button key="Home">
                  <DashboardIcon style={{paddingRight:'0.5em'}}/>
                  <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
                </ListItem>
                <ListItem button key="User Profile">
                  <AccountCircle style={{paddingRight:'0.5em'}}/>
                    <Link to={'/userProfile'} style={{ textDecoration: 'none' }}>User Profile</Link>
                </ListItem>
                <ListItem button key="Events">
                  <EventIcon style={{paddingRight:'0.5em'}}/>
                  <Link to={'/events'} style={{ textDecoration: 'none' }}>Events</Link>
                </ListItem>
                <ListItem button key="trend">
                  <TrendIcon style={{paddingRight:'0.5em'}}/>
                  <Link to={'/trends'} style={{ textDecoration: 'none' }}>Trends</Link>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button key="contact_us">
                    <ListItemIcon><ContactIcon /></ListItemIcon>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                  <ListItem button key="about">
                    <ListItemIcon><GroupIcon /> </ListItemIcon>
                    <ListItemText primary="About" />
                  </ListItem>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);
