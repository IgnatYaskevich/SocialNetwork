import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunkType} from "./redux-store";
import {ActionsTypes} from "./Actions";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


type initialStateType = {
    initialized: boolean
}
export let initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS : {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)


//Thunk
// async - асинхронная.
export const initializeAppTC = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
    //
    // dispatch(initializedSuccess(false))
}
