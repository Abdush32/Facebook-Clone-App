import React from 'react'
import "./story.css"
import { Avatar } from '@material-ui/core';


const Story = ({image,profilesrc,title}) => {
    return (
        <div className="story" style={{backgroundImage : `url(${image})`}}>
        <Avatar src={profilesrc}  className="story_avatar"/>
        <h4>{title}</h4>
            
        </div>
    )
}

export default Story
