import React from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileTC,
    getUserStatusTC,
    ProfileType,
    savePhoto,
    updateUserStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {LinearProgress} from "@material-ui/core";


type MapStatePropsType = {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    status: string
    authorizedUserId: number
    savePhoto:  any
}
type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStatePropsType    //
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    refreshProfile() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        if (!this.props.profile) {
            return <LinearProgress/>
        }
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         savePhoto ={this.props.savePhoto}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

// ф-ия compose --- позволяет все обёртки делать последовательными.
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getUserStatus: getUserStatusTC,
        updateUserStatus: updateUserStatusTC,
        savePhoto
    }), withRouter, withAuthRedirect)(ProfileContainer)