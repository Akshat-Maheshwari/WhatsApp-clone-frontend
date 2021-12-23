import React , {useState} from "react"
import "./Chat.css"
import {IconButton, Avatar} from "@material-ui/core";
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SearchIcon from '@material-ui/icons/Search';
import MessageBox from "./MessageBox";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import axios from "../axios";

const Chat=(props)=>{

    const [messageText,setMessageText] = useState("")
    const sendMessage=async (e)=>{
        e.preventDefault();
        await axios.post("/messages/new",{
            name:"",
            message:messageText,
            timeStamp: new Date().getHours() + ":" + new Date().getMinutes(),
            received:false
        })
        setMessageText("");
    }

    return(
    <div className="chat">
        <div className="chat-header">
            <IconButton>
                <Avatar />
            </IconButton>
            
            <div className="chat-header-info">
                <h3>Name</h3>
                <p>Last seen</p>
            </div>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon />
            </IconButton>
        </div>
        <div className="chat__body">
            <MessageBox messages = {props.messages}  />
        </div>
        <div className="chat__footer">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <form>
                <input value={messageText} onChange={(e) => setMessageText(e.target.value)} type="text" placeholder="Type a message"></input>
                <button onClick={sendMessage} type="submit">Send</button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>
            
        </div>
    </div>
    )}

export default Chat;