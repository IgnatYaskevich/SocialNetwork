import {addPostAC, setPhotoSuccess, setStatus, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageCreatorAC} from "./dialogs-reducer";
import {setAuthUserData} from "./auth-reducer";
import {initializedSuccess, setNewStatus} from "./AppReducer";


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageCreatorAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof setPhotoSuccess>
    | ReturnType<typeof setNewStatus>


