import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom"
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/login/login";
import {connect, ConnectedProps} from "react-redux";
import {initializeAppTC} from "./redux/AppReducer";
import {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {LinearProgress} from "@material-ui/core";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/ProFile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <LinearProgress/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                    <Route path={'/news'} render={withSuspense(News)}/>
                    <Route path={'/music'} render={withSuspense(Music)}/>
                    <Route path={'/settings'} render={withSuspense(Settings)}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const connector = connect(mapStateToProps, {initializeAppTC})
export default connector(App)
export type AppPropsType = ConnectedProps<typeof connector>
