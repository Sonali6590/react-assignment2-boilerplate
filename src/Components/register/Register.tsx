import React, { useState } from 'react';
import { makeStyles, createStyles, FormControl, Input, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => 
createStyles({
    marginForRegister:
                {
                    marginTop:80,
                    marginLeft:40                    
                }
}))

export default function Register()
{
    const classes=useStyles();
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const history=useHistory();
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
    const onChangeConfirmPassword=(e:any)=>
    {
        e.preventDefault();
        // let name=e.target.name;
        let value=e.target.value;
        setConfirmPassword(value);
    };
    const onClickRegister=(e:any)=>
    {
        e.preventDefault();
        history.push('/dashboard');
        
    };

    return <div className={classes.marginForRegister}>
    <FormControl>        
    <Input 
        type="text" 
        placeholder="    Enter User Name"
        name="RegisterUserName"
        value={userName}
        onChange={onChangeUserName}/>        
    <Input 
        type="password" 
        placeholder="    Enter Password"
        name="Registerpassword"
        value={password}
        onChange={onChangePassword}/>
        <Input 
        type="password" 
        placeholder="    Confirm Password"
        name="RegisterconfirmPassword"
        value={confirmPassword}
        onChange={onChangeConfirmPassword}/>
    <Button onClick={onClickRegister}>Register</Button>
    
</FormControl></div>
};