import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { useHistory } from "react-router-dom";


function Login() {

    const [,dispatch] = useStateValue();
    const history = useHistory();

    const signIn = () => {
           auth.signInWithPopup(provider)
            .then((user) => {
                dispatch({type:"SET_USER", value:user})
                history.push("/rooms")
            })
            .catch((error) => alert(error.message))
    }

    React.useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({type:"SET_USER", value:user})
                history.push("/rooms")
                console.log("loggedin")
            }else{
              console.log("loggedout")
            }
        })
    },[dispatch,history]) 



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
