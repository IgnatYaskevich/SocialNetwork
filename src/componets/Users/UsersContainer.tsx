import {connect} from "react-redux";
import {follow, getUsers, toggleFollowingProgress, unFollow, UsersPropsType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./UsersPresentation/Users";
import {Preloader} from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    users: UsersPropsType[]
    pageSize: number
    totalUserCount: number
    currentPage: number,
    isFetching: boolean
    followingImProgress: string[]
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUSerCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       followingImProgress={this.props.followingImProgress}
                />
            </>
        )
    }
}

let
    mapStateToProps = (state: AppStateType): MapStateToPropsType => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUserCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingImProgress: state.usersPage.followingImProgress
        }
    }

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    follow, unFollow, toggleFollowingProgress, getUsers
})(UsersContainer)

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//         return {
//             follow: (userId: string) => {
//                 dispatch(followAC(userId))
//             },
//             unFollow: (userId: string) => {
//                 dispatch(unFollowAC(userId))
//             },
//             setUsers: (users: Array<UsersPropsType>) => {
//                 dispatch(setUsersAC(users))
//             },
//             setCurrentPage: (pageNumber: number) => {
//                 dispatch(setCurrentPageAC(pageNumber))
//             },
//             setTotalUsersCount: (totalCount: number) => {
//                 dispatch(setTotalUserCountAC(totalCount))
//             },
//             toggleIsFetching: (isFetching: boolean) => {
//                 dispatch(toggleIsFetchingAC(isFetching))
//             }
//         }
//     }
