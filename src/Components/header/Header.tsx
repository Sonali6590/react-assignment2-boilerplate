import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

// import Link from 'react-router';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkButton:
  {
    color: "white"
  }
}));


const Header = () => {
  const classes = useStyles();
  // const history=useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Daily News
          </Typography>
          <Typography variant="button">
            <Button className={classes.linkButton} href="/dashboard" >Dashboard</Button>
            <Button className={classes.linkButton} href="/readnow" >Read Now</Button>
            <Button className={classes.linkButton} onClick={() => {
              let token = localStorage.getItem("token");
              if (token !== undefined && token !== null) {
                localStorage.removeItem("token");
              }

              // window.location('/login');
            }}>Sign Out</Button>

          </Typography>
          {/* <Button color="inherit" onClick={()=>{<Redirect to='/dashboard' />}}>Dashboard</Button>
          <Button color="inherit"  onClick={onClickReadNow}>Read Now</Button> */}

        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;