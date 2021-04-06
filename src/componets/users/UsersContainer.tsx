import {Users} from "./Users";
import {connect} from "react-redux";
import {UsersPropsType} from "../../redux/Store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: UsersPropsType[]

}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
}

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        users: state.usersPage.users,

    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersPropsType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect<MapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps, mapDispatchToProps)(Users)