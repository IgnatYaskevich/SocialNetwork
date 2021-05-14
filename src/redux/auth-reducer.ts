import {ActionsTypes} from "./Actions";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_DATA = 'SET_USER_DATA';

export type AuthInitialStatePropsType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

export let initialState: AuthInitialStatePropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthInitialStatePropsType = initialState, action: ActionsTypes): AuthInitialStatePropsType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload,

            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: null | string, login: null | string, email: null | string, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, login, email, isAuth}} as const)


//Thunk
export const getAuthUserDataTC = () => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            }
        })
}
export const logoutTC = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
