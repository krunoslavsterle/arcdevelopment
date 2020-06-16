import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

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
    ...theme.mixins.toolbar
  }
}))

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        {/* position="fixed" and color="primary" are default values, we don't have to set them. */}
          <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h3">
              Arc Development
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      
      {/* toolbarMargin class contain height of the toolbar so this div will push the content bellow the toolbar (because the toolbar is not static, fixed flows above the content) */}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};