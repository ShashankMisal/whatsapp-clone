import React from 'react'
import './App.css';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'
import { Route } from 'react-router-dom';
import Login from './Login';
import GroupInfo from './GroupInfo'
import PrivateRoute from './PrivateRoute';


function App() {

  return (
    <div className="app">

      <div className="app__body">

        <Route exact path="/">
          <Login />
        </Route>

        <PrivateRoute path="/rooms" component={Sidebar} />

        <PrivateRoute path="/rooms/:roomId" component={Chat} />

        <PrivateRoute path="/rooms/:roomId/groupInfo" component={GroupInfo} />

      </div>
    </div>
  );
}

export default App;
