import React from 'react';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header1 from "./componets/Header/Header1";
import Navbar from "./componets/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import Profile from './componets/ProFile/Profile';
import state, {changeNewTextPost, ProfilePageType, RootStateType} from "./redux/State";

type AppType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    upDateNewPostText: (newText: string) => void

}
const App = (props: AppType) => {
    // @ts-ignore
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header1/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
               />}/>
                    {/*// с помощью стрелочной  ф-ии передаюм компанетну*/}
                    <Route path={'/profile'} render={() => <Profile
                        profilePage={props.state.profilePage}
                        upDateNewPostText={changeNewTextPost}
                        addPost={props.addPost}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>)
}


let app = App;
export default app;
