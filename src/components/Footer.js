import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "../assets/styles/footerStyle.jsx";

class Footer extends React.Component{

    render(){
    const { classes, whiteFont } = this.props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return(
    <footer className={footerClasses} style={{background:'#3E4EBC'}}>
    <div className={classes.container}>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a
              href="https://www.linkedin.com/in/rajeshkumar-g/"
              className={classes.block}
              target="_blank"
            >
              Dev Team
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="https://www.linkedin.com/in/rajeshkumar-g/"
              className={classes.block}
              target="_blank"
            >
              About us
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="https://www.linkedin.com/in/rajeshkumar-g/"
              className={classes.block}
              target="_blank"
            >
              Blog
            </a>
          </ListItem>
        </List>
      </div>
      <div className={classes.right}>
        &copy; {1900 + new Date().getYear()} , made with{" "}
        <Favorite className={classes.icon} /> by{" "}
        <a
          href="https://www.linkedin.com/in/rajeshkumar-g/"
          className={aClasses}
          target="_blank"
        >
          Lexus Dev
        </a>{" "}
        for a better web.
      </div>
    </div>
  </footer>
    );}
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    whiteFont: PropTypes.bool
  };
  
export default withStyles(footerStyle) (Footer);