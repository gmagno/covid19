import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tooltip, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: '56px'
  },
  spacer: {
    flexGrow: 1
  }
}));

export interface StatusBarProps {
  onSearchButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onRefreshButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMenuButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StatusBar = (props: StatusBarProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="inherit" className={classes.appbar}>
        <Toolbar>
          <Tooltip title="search" arrow={true}>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={props.onSearchButtonClick}
            >
              <SearchRoundedIcon />
            </IconButton>
          </Tooltip>
          <div className={classes.spacer} />
          <Tooltip title="refresh" arrow={true}>
            <IconButton onClick={props.onRefreshButtonClick}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="menu" arrow={true}>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={props.onMenuButtonClick}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};
