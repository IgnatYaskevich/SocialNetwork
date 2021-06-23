import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunkType} from "./redux-store";
import {ActionsTypes} from "./Actions";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


type initialStateType = {
    initialized: boolean
    statusApp: RequestStatusType
}
export let initialState: initialStateType = {
    initialized: false,
    statusApp: 'idle'
}

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS : {
            return {
                ...state,
                initialized: true
            }
        }
        case 'SET_NEW_STATUS': {
            return {...state, statusApp: action.status}
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)
export const setNewStatus = (status: RequestStatusType) => ({type: 'SET_NEW_STATUS', status} as const)


//Thunk
// async - асинхронная.
export const initializeAppTC = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}
