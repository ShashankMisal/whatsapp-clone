import React,{useEffect ,useState} from 'react'
import {Avatar} from '@material-ui/core'
import "./SidebarChat.css"
import db from './firebase'
import {NavLink} from 'react-router-dom'

function SidebarChat({id,name,addNewChat}) {


    const [messages, setMessages] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);



    const createChat = () => {
        const roomName = prompt("Please Enter a Name for Chat room");

        if(roomName){
                db.collection("rooms").add({
                    name:roomName,
                })
        }
    }

    return !addNewChat?(

      <NavLink to={`/rooms/${id}`} activeClassName="selected">
        <div className="sidebarChat">
            <Avatar src="https:/avatars.dicebear.com/api/human/mohan.svg"/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
      </NavLink>  
    ) :(
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
     
    )
}

export default SidebarChat
