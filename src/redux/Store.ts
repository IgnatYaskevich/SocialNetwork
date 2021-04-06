import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";


export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type NewMessageType = {
    newMessageBody: string
}
export type ProfilePageType = {
    posts: PostsType[]
    NewPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type SidebarType = {}


export  type UsersPropsType = {
    id: string,
    followed: boolean,
    photoUrl: string
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}
export type UsersPageType = {
    users: UsersPropsType[]
}


type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    sidebar: {}
}


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>

// -----------------STORE-------------------

export type StoreType = {
    subscribe: (callback: () => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}
