import React from 'react';
import "./MessageBox.css";

const MessageBox = (props)=>{
    return(
        props.messages.map((message)=>(
        <p className={`chat__messageBox ${!message.received && "chat__reciever"}`}>
            <p className="chat__name">{message.name}</p>
            <p className="chat__message">{message.message}</p>
            <p className="chat__timestamp">{message.timeStamp}</p>

        </p>
        ))
        
    )
}

export default MessageBox;