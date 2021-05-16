import {ActionsTypes} from "./Actions";
import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

export type AuthInitialStatePropsType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

export let initialState: AuthInitialStatePropsType = {
    userId: null,
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
export const getAuthUserDataTC = () : AppThunkType=>(dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })

}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType =>(dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response=>{
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'

                dispatch(stopSubmit('login', {_error: message}) as ActionsTypes)
            }
        })

}
export const logoutTC = ():AppThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}