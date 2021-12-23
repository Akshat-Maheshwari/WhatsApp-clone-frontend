import React, {useEffect, useState} from 'react';
import Chat from "./Components/Chat";
import Sidebar from './Components/Sidebar';
import axios from "./axios";
import "./App.css";
import Pusher from 'pusher-js';

const App = ()=>{

  const [messageData, setMessageData]= useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
      .then(res =>{
        setMessageData(res.data)
      })
  },[])
console.log(messageData)
  useEffect(()=>{
    var pusher = new Pusher('9071e1e45399ef2cbfe7', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessageData([...messageData,data])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe();
    }

  },[messageData])


  return(
    <div className="app">
      <div className="app-body">

        <Sidebar />
        <Chat messages={messageData} />
        
      </div>
    </div>
  )
}
export default App;