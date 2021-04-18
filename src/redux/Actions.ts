import {addPostAC, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageCreatorAC, updateNewMessageBodyCreatorAC} from "./dialogs-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageCreatorAC>
    | ReturnType<typeof updateNewMessageBodyCreatorAC>
    | ReturnType<typeof setUserProfile>

