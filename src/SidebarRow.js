import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarRow.css"

export const SidebarRow = ({Icon,src,title}) => {
    return (
        <div className="sidebarRow">
        {src && <Avatar src={src} /> }
        {Icon && <Icon /> }
        <h4>{title}</h4>
        
        </div>
    )
}
