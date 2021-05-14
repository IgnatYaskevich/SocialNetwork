import {ActionsTypes} from "./Actions";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType, AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


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
// async - асинхронная.
export const getAuthUserDataTC = (): AppThunkType => async dispatch => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }

}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        debugger
        // @ts-ignore
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'

        dispatch(stopSubmit('login', {_error: message}) as ActionsTypes)
    }
}
export const logoutTC = (): AppThunkType => async dispatch => {
    const response = await authAPI.logout()
    dispatch(setAuthUserData(null, null, null, false))
}
