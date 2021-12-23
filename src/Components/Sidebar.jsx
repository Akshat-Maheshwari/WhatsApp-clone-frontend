import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat";
import ChatIcon from '@material-ui/icons/Chat';
import {IconButton, Avatar} from "@material-ui/core";
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';


const Sidebar = () => {
    const image="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/266208868_401346508400903_6381605725675216949_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JYBPcSs4MJsAX_KgTm2&_nc_ht=scontent.fdel29-1.fna&oh=00_AT_hvhlzyT8vPDkEwNiWTqTMt1tdpTsToOYV1dh_Wv5CoQ&oe=61C0AE0D"
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className="sidebar-header-right">
                    <Avatar src={image} />
                </div>
                <div className="sidebar-header-left">
                    <IconButton>
                        <DonutLargeOutlinedIcon />
                    </IconButton>
                    <IconButton>
                         <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start a new chat"></input>
                </div>
            </div>
            <div className="sidebar-allChats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
