import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import NewsService from '../../services/news.service';
import NewsDataModel from '../../model/NewsDataModel';
import DisplayCard from '../displayCard/DisplayCard';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(() => 
createStyles({
    marginForReadNow:
                {
                    marginTop:80,
                    marginLeft:40                    
                }
}))

export default function ReadNow()
{
    const history=useHistory();    
    const classes=useStyles();
    const [readNow,setReadNow]=useState<NewsDataModel[]>([]);
    const newsService=new NewsService();    
    const token=localStorage.getItem("token");
    
    if(token===undefined||token===null)
    {
        history.push('/login');
    }    
    let getReadNow =newsService.getReadNow();

    getReadNow.then((data)=>{
       if(readNow.length===0)
       {
            setReadNow(data);
       }
    });
    console.info(readNow);
    let list=readNow.map((element:NewsDataModel)=>{
        return <DisplayCard readNow={element}></DisplayCard>
    })

    return <div className={classes.marginForReadNow}>
            {list}
    </div>;
}