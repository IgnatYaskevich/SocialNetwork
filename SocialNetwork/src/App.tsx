import React from 'react';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header1 from "./componets/Header/Header1";
import Navbar from "./componets/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {StoreType} from "./redux/Store";
import {Profile} from './componets/ProFile/Profile';
import {store} from "./redux/redux-store";


type AppType = {
    store: StoreType
}

export const App: React.FC<AppType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header1/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}
                                 newMessageBody={state.dialogsPage.newMessageBody}
                                 dispatch={props.store.dispatch.bind(props.store)}
                    />}/>

                    <Route path={'/profile'} render={() =>
                        <Profile profilePage={state.profilePage}
                                 dispatch={props.store.dispatch.bind(store)}
                        />}/>

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


// let app = App;
// export default app;
