import {AppStateType} from "./redux-store";

// Селектор --- это фунция которая принимает весь STATE уеликом и возвращает в бизнес
export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingImProgress = (state: AppStateType) => {
    return state.usersPage.followingImProgress
}
