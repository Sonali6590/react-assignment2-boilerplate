import { Typography, Toolbar, AppBar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    }
}));

const Footer = () => {
    const classes = useStyles();
    return(
    <div>
        <AppBar  style={{bottom:0,top:"auto"}}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    @copyright to Sonali 
      </Typography>
            </Toolbar>
        </AppBar>
    </div>)
}
export default Footer;