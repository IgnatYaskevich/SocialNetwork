import {ActionsTypes} from "./Actions";


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



