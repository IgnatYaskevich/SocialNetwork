import React from 'react';
import './App.css';
import Header1 from "./componets/Header/Header1";
import Navbar from "./componets/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";

import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from "./componets/ProFile/ProfileContainer";


export const App: React.FC<any> = () => {
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header1/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path={'/profile'} render={() =>
                        <ProfileContainer/>}/>
                    <Route path={'/UsersFuntionComponent'} render={() =>
                        <UsersContainer/>}/>
                    <Route path={'/news'} render={() =>
                        <News/>}/>
                    <Route path={'/music'} render={() =>
                        <Music/>}/>
                    <Route path={'/settings'} render={() =>
                        <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>)
}

