import React from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: number) => void

}
type PathParamsType = {
    userId: string

}
type OwnPropsType = MapStatePropsType    //
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // usersAPI.getProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data)
        // })   
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.profile) return <Preloader/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
})

// ф-ия compose --- позволяет все обёртки делать последовательными.
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
    , withAuthRedirect)(ProfileContainer)