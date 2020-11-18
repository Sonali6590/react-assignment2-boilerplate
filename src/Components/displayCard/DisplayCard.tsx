import React from'react';
import { Paper, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles(
        {
            flexContainer:
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: 200,
                paddingLeft: 75,
                paddingRight: 75
            },
            flexContainerCard:
            {
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                margin: 5
            },
            imageSize:
            {
                width: 200,
                height: 130
            }
        }
    ));
export default function DisplayCard(props:any)
{
    const readNow=props.readNow;
    const classes=useStyles();
     return <div>
    <Paper elevation={4} className={classes.flexContainerCard}>
        {/* <div><img className={classes.imageSize} src={currentNews.urlToImage} alt="load failure" /></div> */}
        <div><h3 style={{ color: "cadetblue", textAlign: "left" }}>{readNow.fullDescription}</h3>
            <h5 style={{ color: "darkgreen", textAlign: "left" }}>{readNow.url}</h5>
            {/* {!displayDescription ? <Button style={{ color: "red", float: "left" }}>Show More...</Button> : <div style={{ float: "left", textAlign: "left", fontStyle: "italics" }}>{currentNews.content}</div>} */}
            
        </div>

    </Paper>                        
</div>;
}