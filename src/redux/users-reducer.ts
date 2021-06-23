import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UsersPropsType = {
    name: string
    id: string,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    }
    status: string,
    followed: boolean,
}
export type UsersPageType = {
    users: UsersPropsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingImProgress: string[]
}


const FOLlOW = 'users/FOLlOW';
const UN_FOLlOW = 'users/UN_FOLlOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FETCHING_PROGRESS = 'users/TOGGLE_IS_FETCHING_PROGRESS'


export const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingImProgress: ['']
}


type ActionTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


export const usersReducer = (state = initialState, action: ActionTypes): UsersPageType => {
    switch (action.type) {
        case FOLlOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UN_FOLlOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS : {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING  : {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FETCHING_PROGRESS : {
            return {
                ...state, followingImProgress: action.isFetching
                    ? [...state.followingImProgress, action.userId]
                    : state.followingImProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state
    }
}


export const followSuccess = (userId: string) => ({type: FOLlOW, userId} as const)
export const unFollowSuccess = (userId: string) => ({type: UN_FOLlOW, userId} as const)
export const setUsers = (users: Array<UsersPropsType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId
} as const)

// ThunkCreator - ф-ия которая может принимать данные и return thunk
export const requestUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUserCount(data.totalCount))

}

const followUnFollowFlow = async (dispatch: Dispatch, userId: string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))

    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const unFollowTC = (userId: string) => async (dispatch: Dispatch) => {

    await followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), unFollowSuccess)
}
export const followTC = (userId: string) => async (dispatch: Dispatch) => {

    await followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), followSuccess)
}
