import React from 'react';
import './App.css';
import Header1 from "./componets/Header/Header1";
import Navbar from "./componets/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {Profile} from './componets/ProFile/Profile';

import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";


export const App: React.FC<any> = () => {
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header1/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path={'/dialogs'} render={() =>
                    //     <Dialogs dialogs={state.dialogsPage.dialogs}
                    //              messages={state.dialogsPage.messages}
                    //              newMessageBody={state.dialogsPage.newMessageBody}
                    //              dispatch={props.store.dispatch.bind(props.store)}
                    // />}/>
                    <DialogsContainer />
                    }/>

                    <Route path={'/profile'} render={() =>
                        <Profile/>}/>

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

