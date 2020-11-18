import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Paper, Button } from '@material-ui/core';
import News from '../../model/News';
// import AuthService from '../../services/auth.service';
// import NewsDataModel from '../../model/NewsDataModel';

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

export default function Card(props: any) {
    const classes = useStyles();
    // const newService = new NewsService();

    
    // let displayDescription: Boolean = true;
    let handleReadLaterOnClick = (event: any, currentNews: News) => {
        // let newsContent: NewsDataModel = new NewsDataModel(currentNews.description, currentNews.url);
        // newService.saveNewsData(newsContent);
    };
    // let newsList: News[] = [];
    if (props !== undefined && props.currentNews !== undefined) {
        let prop = props.currentNews;
        // newsList =
        //     prop.map((element: News) => {
        //         // <div>element</div>
        //         if (element !== undefined) {
                    let currentNews = prop;
                    // let displayAlert=false;
                    return <div>
                        <Paper elevation={4} className={classes.flexContainerCard}>
                            <div><img className={classes.imageSize} src={currentNews.urlToImage} alt="load failure" /></div>
                            <div><h3 style={{ color: "cadetblue", textAlign: "left" }}>{currentNews.title}</h3>
                                {/* <h5 style={{ color: "darkgreen", textAlign: "left" }}>{currentNews.description}</h5> */}
                                {/* {!displayDescription ? <Button style={{ color: "red", float: "left" }}>Show More...</Button> : <div style={{ float: "left", textAlign: "left", fontStyle: "italics" }}>{currentNews.content}</div>} */}
                                <Button style={{ color: "red", float: "left" }} onClick={(e) => { handleReadLaterOnClick(e, currentNews) }}>READ LATER</Button>
                            </div>

                        </Paper>                        
                    </div>;

                }
                else {
                    return <div> "News Card component not working!!"</div>;

                }
    //         });
    // }

    // return <div className={classes.flexContainer}>{newsList}</div>;



}