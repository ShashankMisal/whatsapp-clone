import React,{useEffect ,useState} from 'react'
import {Avatar} from '@material-ui/core'
import "./SidebarChat.css"
import db from './firebase'
import {NavLink ,useRouteMatch} from 'react-router-dom'
import firebase from "firebase/app";


function SidebarChat({id,name,addNewChat}) {

    const [messages, setMessages] = useState("");
    const {url} = useRouteMatch();



    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

   

    const createChat = () => {
        const roomName = prompt("Please Enter a Name for New Group");


        if(roomName){
                db.collection("rooms").add({
                    name:roomName,
                    createdAt:firebase.firestore.FieldValue.serverTimestamp()
                })                
        }else{
            alert("Please Enter Group Name....")
        }
    }



    return !addNewChat?(

      <NavLink to={`${url}/${id}`} activeClassName="selected">
        <div className="sidebarChat">
            <Avatar src={`https://joeschmoe.io/api/v1/${name}`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.name.substring(0,8)}... {" "}:{" "}{messages[0]?.message}</p>
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
