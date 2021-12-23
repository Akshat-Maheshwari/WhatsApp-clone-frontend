import React from "react"
import "./SidebarChat.css"
import {IconButton, Avatar} from "@material-ui/core";

const SidebarChat = ()=>{
    return(
        <div className="sidebar-chat">
            <Avatar style={{height:'50px',width:'50px'}} />
            <div className="sidebar-chat-info">
                <h3>Name</h3>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat;