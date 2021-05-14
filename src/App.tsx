import React from 'react';
import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from "./componets/ProFile/ProfileContainer";
import HeaderContainer from './componets/Header/HeaderContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import Login from "./componets/login/login";


export const App: React.FC<any> = () => {
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path={'/profile/:userId?'} render={() =>
                        <ProfileContainer/>}/>
                    <Route path={'/users'} render={() =>
                        <UsersContainer/>}/>
                    <Route path={'/news'} render={() =>
                        <News/>}/>
                    <Route path={'/music'} render={() =>
                        <Music/>}/>
                    <Route path={'/settings'} render={() =>
                        <Settings/>}/>
                    <Route path={'/login'} render={() =>
                        <Login />}/>
                </div>
            </div>
        </BrowserRouter>)
}

