import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
    UsersPropsType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./UsersPresentation/Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";


type MapStateToPropsType = {
    users: UsersPropsType[]
    pageSize: number
    totalUserCount: number
    currentPage: number,
    isFetching: boolean
    followingImProgress: string[]
}
// type MapDispatchToPropsType = {
//     follow: (userId: string) => void
//     unFollow: (userId: string) => void
//     setUsers: (users: Array<UsersPropsType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }
type PropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    users: UsersPropsType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingImProgress: string[]
}

export class UsersContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUserCount}
                       setUsers={this.props.setUsers}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleFollowingProgress
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
//
//
//         }
//     }
