import {addPostCreator, updateNewPostTextCreator} from "./profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export  type MessagesType = {
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
export type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}


// type  AddPostActionType = {
//     type: 'ADD-POST',
//     newPostText: string
// }
// type ChangeNewTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
// type AddMessageActionType = {
//     type: 'UPDATE_NEW_MESSAGE_BODY'
//     newBody: string
// }
// type SendMessage = {
//     type: 'SEND_MESSAGE'
//     newMessage: string
// }


//  как упаковать даннные в переменную(объект) и решить вопрос с проксами
// 1.Передаюм переменную state в index.tsx (state(имя):{state(сама переменная}
// 2.Дальше необходимо в App.tsx  передать типизацию переменной state.
// 3.В App создаём TYPE и закидываем тип переменной STATE

// Задача REACT перерисовка,   Бизнес Логика -  делает Истину - логика.

export type ActionsTypes =
    ReturnType<typeof addPostCreator> |
    ReturnType<typeof updateNewPostTextCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>
// -----------------STORE-------------------

export type StoreType = {
   // _state: RootStateType
  //  _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}

//  const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 10},
//                 {id: v1(), message: `It's my first post`, likesCount: 23},
//                 {id: v1(), message: `It's my first post`, likesCount: 23},
//                 {id: v1(), message: `It's my first post`, likesCount: 23},
//             ],
//             NewPostText: '',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Andrey'},
//                 {id: v1(), name: 'Sveta'},
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Ignat'},
//                 {id: v1(), name: 'Ivan'},
//                 {id: v1(), name: 'Pety'}
//             ],
//             messages: [
//                 {id: v1(), message: 'how are you'},
//                 {id: v1(), message: 'Hello'},
//                 {id: v1(), message: 'Yo MazaFaka'},
//                 {id: v1(), message: 'ProLead'},
//                 {id: v1(), message: 'life is good'},
//                 {id: v1(), message: 'PPPRew q '}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {}
//     },
//     _onChange() {
//         console.log('Hello')
//     },
//     subscribe(callback) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch: function (action) {
//
//         this._state.profilePage  = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage  = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar  = sidebarReducer(this._state.sidebar, action)
//         this._onChange()
//
//     }
// }
