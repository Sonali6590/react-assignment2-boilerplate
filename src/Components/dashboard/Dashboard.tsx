import NewsService from "../../services/news.service";
import React, { useState } from "react";
import { makeStyles, createStyles } from '@material-ui/styles';
import Card from "../card/Card";
import News from "../../model/News";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: 80,
        }, 
        flexContainer:
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: 200,
                paddingLeft: 75,
                paddingRight: 75
            }
    }))


export default function Dashboard() {
    const newsService = new NewsService();
    const history=useHistory();    
    const classes = useStyles();
    const [news, setNews] = useState<News[]>([]);
    const token=localStorage.getItem("token");
    
    if(token===undefined||token===null)
    {
        history.push('/login');
    }    
    let newsDataList:any;
    // useEffect(()=>{
        newsService.getNews("everything")
        .then((res) =>{ 
            return res;            
        }).then((data)=>{
            let newsData=[...data];
            // setNews({ "news": "newsData" });
            if(news.length===0)
            {
                setNews(newsData);
            }            
        });
        
        // console.info(news);
        newsDataList=news.map((element=>{
            return <Card currentNews={element}></Card>
        }));
        // console.info(news);
        
        //<Card newsList={news}></Card>
    return (<div className={classes.root}><div className={classes.flexContainer}>{newsDataList}</div></div>);
};



