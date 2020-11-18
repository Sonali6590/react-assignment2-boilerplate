import User from "../model/User";

export default class AuthService
{
    getToken=(user:User)=>
    {
        let uri="http://localhost:3001/auth/v1";
        let method="POST";
        return fetch(uri,{
            method:method,
            body:JSON.stringify(user)
            ,headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            return data;
        })
    };
};