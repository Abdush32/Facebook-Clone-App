import React,{useContext} from 'react'
import { Button } from '@material-ui/core'
import "./login.css"
import fb from "./fb.png"
import { auth, provider } from './firebase'
// import { actionTypes } from './contextApi/reducer';
import {
   SET_USER
  } from "./contextApi/action.types";
import {useStateValue} from './contextApi/StateProvider';



const Login = () => {
    const [state, dispatch] = useStateValue();

const signIn = () =>{
   auth.signInWithPopup(provider)
    .then((result) => {

        dispatch({
            type: SET_USER,
            user: result.user,
          });
    console.log(result);
    }).catch((error) => {
                console.log(error);
        })
    } 


    return (
        <div className="Login">
<div className="login_logo">
<img src={fb} />
<img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
<Button type="submit" className="fbbutton" onClick={signIn}>Signin</Button>

</div>

            
        </div>
    )
}

export default Login
