import React,{useState,useEffect} from "react";
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from '@material-ui/core'
import SidebarChat from './SidebarChat'
import "./Sidebar.css";
import db from './firebase.js'
import { useStateValue } from './StateProvider';
import SimpleMenu from './SimpleMenu'

function Sidebar() {
    
  
    const [rooms, setRooms] = useState([])
    const [{user}] = useStateValue();
  
    useEffect(() => {
      const unsubscribe = db.collection('rooms')
                                .onSnapshot( snapshot => (
                                    
                                  setRooms(snapshot.docs.map(doc => (
                                        {
                                            id: doc.id,
                                            data: doc.data()
                                        }
                                    ) 
                                  ))
                                ));

                  return ()=>{
                    unsubscribe();
                  }
    },[])
  



  return (

    <div className="sidebar">
      
      <div className="sidebar__header">

          <Avatar src={user?.photoURL}/>

          <div className="sidebar__headerRight">
                <IconButton>
                  <DonutLargeIcon/>
                </IconButton>
                
                <IconButton>
                    <ChatIcon/>
                </IconButton> 
                
               
                <SimpleMenu/>
            
    
          </div>
      </div>

      <div className="sidebar__search">

        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon/>
          <input placeholder="Search/Start new Chat" type="text" />
        </div>
          
      </div>


      <div className="sidebar__chats">
        <SidebarChat addNewChat/> 
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
