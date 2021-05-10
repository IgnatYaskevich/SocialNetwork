import {addPostAC, setStatus, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageCreatorAC} from "./dialogs-reducer";
import {setAuthUserData} from "./auth-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageCreatorAC>
    // | ReturnType<typeof updateNewMessageBodyCreatorAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setStatus>

