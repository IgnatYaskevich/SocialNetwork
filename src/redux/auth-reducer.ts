import {ActionsTypes} from "./Actions";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

type InitialStatePropsType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

export let initialState: InitialStatePropsType = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialStatePropsType = initialState, action: ActionsTypes): InitialStatePropsType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: string, login: string, email: string) =>
    ({type: SET_USER_DATA, data: {id, login, email}} as const)

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}
