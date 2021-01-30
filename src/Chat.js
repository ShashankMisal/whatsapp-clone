import React,{useState,useEffect} from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import './Chat.css'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import { Button } from '@material-ui/core';
import {useParams} from 'react-router-dom'
import db from './firebase.js'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'


function Chat() {

    const [input,setInput] = useState("")
    const {roomId} = useParams();
    const [roomName,setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
              setRoomName(snapshot.data().name);
          });
          
          db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        });
          
        }
    },[roomId])

    const sendMessage = (e) =>{
      e.preventDefault();
      db.collection('rooms').doc(roomId).collection('messages').add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

      setInput("")
    }


    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar />
          <div className="chat__headerInfo">
          <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {
                        new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleTimeString()
                        }
                    </p>
          </div>

          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>

            <IconButton>
              <AttachFile />
            </IconButton>

            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="chat__body">

          {messages.map(message=>(
              
              <p className={`chat__message ${ message.name === user.displayName && 'chat__reciever'}`}>
               <span className="chat__name">
                   {message.name}
               </span>
              {message.message}
               <span className="chat__timeStamp">
                   {new Date(message.timestamp?.toDate()).toLocaleTimeString()}
               </span>
               </p>

          ))}
           
        </div>

        <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <Button type="submit"  onClick={sendMessage}>
                        <NavigationOutlinedIcon className="submitBtn" />
                    </Button>
                </form>
                <MicIcon/>
        </div>
      </div>
    );
}

export default Chat
