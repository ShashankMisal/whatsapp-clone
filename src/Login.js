import React,{useEffect} from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [{},dispatch] = useStateValue();
    
    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            if (user) {
              dispatch({type:actionTypes.SET_USER,user:user})
            }
        })
    },[dispatch])
    

    const signIn = () => {
           auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    }


    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
