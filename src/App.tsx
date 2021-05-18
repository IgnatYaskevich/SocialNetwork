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
import {connect, ConnectedProps} from "react-redux";
import {initializeAppTC} from "./redux/AppReducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./componets/common/Preloader/Preloader";


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
        // this.props.getAuthUserDataTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
                            <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const connector = connect(mapStateToProps, {initializeAppTC})
export default connector(App)
export type AppPropsType = ConnectedProps<typeof connector>
