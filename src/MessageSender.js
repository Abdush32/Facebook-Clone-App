import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./messagesender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './contextApi/StateProvider';
import { db } from './firebase';
import firebase from "firebase"

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input,setInput] = useState("")
    const [imageUrl,setImageUrl] = useState("")

const handleSubmit = (e) =>{
e.preventDefault();

db.collection('posts').add({
    message:input,
    //WE use timestamp to get server time otherwise time is gunna missmatch
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    profilePic:user.photoURL,
      username:user.displayName,
    image:imageUrl
    })
    setInput("")
    setImageUrl("") 
}




    return (
        <div className="MessageSender">
        <div className="messanger_top">
    <Avatar src={user.photoURL} />
    <form>
    <input type="text"  
    value={input} onChange={(e) => setInput(e.target.value)} placeholder={`what's on your Mind ${user.displayName}`}
     className="messageSender_input"/>
    <input type="text" value={imageUrl} 
    onChange={(e) => setImageUrl(e.target.value)} placeholder="Image Url (optional)"/>
    <button onClick={handleSubmit} type="submit">Hidden button</button>
    </form>
        </div>

        <div className="messanger_bottom">
<div className="messageSender_option">
<VideocamIcon style={{color:"red"}} />
<h3>Live </h3>
</div>
     {/*PART 2*/}   
<div className="messageSender_option">
<PhotoLibraryIcon style={{color:"green"}} />
<h3>Photo/Video</h3>
</div>  

     {/*PART 3*/}   
     <div className="messageSender_option">
     <InsertEmoticonIcon style={{color:"orange"}} />
     <h3>Feelings/Activity</h3>
     </div> 
        
        </div>
            
        </div>
    )
}

export default MessageSender
