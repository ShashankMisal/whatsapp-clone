import React,{useState} from 'react'
import './GroupInfo.css'
import { Avatar, IconButton } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { NavLink } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';


function GroupInfo() {

    const [rId, setrId] = useState("")

    let location = useLocation();

    useEffect(()=>{
        if(location.state.roomId){  
            setrId(location.state.roomId)
        }
    },[location])

  

    return (
        <div className="groupInfo">

            <div className="groupInfo__header">
                <NavLink to={`/rooms/${rId}`} >
                <IconButton>
                    <ClearIcon/>
                </IconButton>
                </NavLink>
                <h4>Group Info</h4>
            </div>

            <div className="groupInfo__nameAvatar">
                <Avatar src={`https://joeschmoe.io/api/v1/${location.state.roomName}`} className="groupInfo__avatar"/>
                <div className="groupInfo__name">
                    <div>
                        <h2>{location.state.roomName}</h2>
                        <p>Created on {new Date(location.state.createdAt).toLocaleDateString()} at {new Date(location.state.createdAt).toLocaleTimeString()}</p>
                    </div>

                    <div>
                    <EditOutlinedIcon/>
                    </div>
                </div>
            </div>

            <div className="groupInfo__description">
                <div>
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum repudia........</p>
                </div>

                <div>
                    <EditOutlinedIcon/>
                    </div>
            </div>


            <div className="groupInfo__media">
                <div className="groupInfo__mediaHeader">
                    <h4>Media, Links and Docs</h4>
                    <KeyboardArrowRightOutlinedIcon/>
                </div>

                <div className="groupInfo__mediaContents">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="groupInfo__options">

                <div className="groupInfo__option" style={{borderBottom:"1px solid rgb(201, 201, 201)"}} >
                    <h4>Mute Notification</h4>
                    <Checkbox
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                </div>
                
                <div className="groupInfo__option" style={{marginTop:"15px"}} >
                    <h4>Starred Message</h4>
                    <KeyboardArrowRightOutlinedIcon/>
                </div>

            </div>

            <div className="groupInfo__option1" >
                    <ThumbDownAltRoundedIcon/>
                    <h4>Report Group</h4>
            </div>
            
             <div className="groupInfo__option1" >
                    <ExitToAppRoundedIcon/>
                    <h4>Exit Group</h4>
            </div>

        </div>
    )
}

export default GroupInfo
