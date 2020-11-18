import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FormControl, Input, Button } from '@material-ui/core';
import AuthService from '../../services/auth.service';
import User from '../../model/User';

const useStyles = makeStyles(() => 
createStyles({
    marginForLogin:
                {
                    marginTop:80,
                    marginLeft:40                    
                }
}))

export default function Login() {
    const classes=useStyles();
    const history=useHistory();
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');    
    
    const onChangeUserName=(e:any)=>
    {
        e.preventDefault();
        // let name=e.target.name;
        let value=e.target.value;
        setUserName(value);
    };
    const onChangePassword=(e:any)=>
    {
        e.preventDefault();
        // let name=e.target.name;
        let value=e.target.value;
        setPassword(value);
    };
    const onClickLogin=(e:any)=>
    {
        e.preventDefault();
        let user=new User(userName,password);
        const authService=new AuthService().getToken(user);
        authService.then((data)=>{
            
            console.info(data.token);
            if(data.token!==undefined)
            {
                localStorage.setItem("token",data.token);
                history.push('/dashboard');
            }
            else{
                localStorage.removeItem("token");
            }
            
        });
    };
    return <div className={classes.marginForLogin}>
    <FormControl>        
        <Input 
            type="text" 
            placeholder="    Enter User Name"
            name="UserName"
            value={userName}
            onChange={onChangeUserName}/>        
        <Input 
            type="password" 
            placeholder="    Enter Password"
            name="password"
            value={password}
            onChange={onChangePassword}/>
        <Button onClick={onClickLogin}>Log In</Button>
        <Button onClick={()=>{history.push("/register")}}>Register</Button>
    </FormControl>
    </div>
};

