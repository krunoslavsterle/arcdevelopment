import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    
    // This is hard-coded value that works in this case but we could rewrite the toolbar style inside the Theme so that the image changes the height with the toolbar. 
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  }
}))

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        {/* position="fixed" and color="primary" are default values, we don't have to set them. */}
          <AppBar position="fixed" color="primary">
          {/* disableGutters removes the default padding around the Toolbar component */}
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      
      {/* toolbarMargin class contain height of the toolbar so this div will push the content bellow the toolbar (because the toolbar is not static, fixed flows above the content) */}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};