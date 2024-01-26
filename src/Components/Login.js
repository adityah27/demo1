import React, { useEffect } from 'react'
import getUser from '../Apis/api';
import { Avatar, Box, Button, Card, CardActions, CardContent, Icon, Link, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate= useNavigate();
    const [users, SetUsers] = ('');

    // useEffect(() => {
    //     // Call the getUser method when the component mounts
    //     getUser();

    //     // Optionally, you can return a cleanup function
    //     // This function will be called when the component unmounts
    //     return () => {
    //         // Cleanup code if needed
    //     };
    // }, []);

const onClickLogin = ()=>{
    navigate('/dashboard');
}
    return (
        <>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#8F8EA4' }}>

                <Card style={{ width: '400px',  margin: 'auto',}}>
                   
                        <CardContent style={{display:'flex',justifyContent:'center'}}>
                            <Avatar sx={{ bgcolor: '#8F8EA4' }}></Avatar>
                        </CardContent>
                        <CardContent style={{display:'flex',justifyContent:'center'}}>
                            <TextField id="userid" label="Username" variant="outlined" />
                        </CardContent>
                        <CardContent style={{display:'flex',justifyContent:'center'}}>
                            <TextField id="userpass" label="Password" variant="outlined" type='password' />
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{margin:'5px'}} variant="contained" onClick={onClickLogin}>Login</Button>
                            <Link>Signup</Link>
                        </CardActions>
                    
                </Card>
            </div>

        </>
    )
}

export default Login