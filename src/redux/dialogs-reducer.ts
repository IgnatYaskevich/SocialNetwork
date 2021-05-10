import {v1} from "uuid";
import {ActionsTypes} from "./Actions";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = '__SEND_MESSAGE';

export type DialogsType = {
    id: string
    name: string
}
export type NewMessageType = {
    newMessageBody: string
}


export type MessagesType = {
    id: string
    message: string
}

// export type DialogsPageType = {
//     dialogs: DialogsType[]
//     messages: MessagesType[]
//     newMessageBody: string
// }
export  type DialogsInitialStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string

}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Ignat'},
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Pety'}
    ],
    messages: [
        {id: v1(), message: 'how are you'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Yo MazaFaka'},
        {id: v1(), message: 'ProLead'},
        {id: v1(), message: 'life is good'},
        {id: v1(), message: 'PPPRew q '}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionsTypes): DialogsInitialStateType => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY : {
        //     return {...state, newMessageBody: action.newBody}
        // }
        case SEND_MESSAGE: {
            const newMessage = {id: v1(), message: action.newMessageBody}
            const asd = [...state.messages, newMessage]
            return {
                ...state,
                messages: asd
            }
        }
        default:
            return state
    }
    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     let stateCopy = {...state,}
    //     stateCopy.newMessageBody = action.newBody
    //     return stateCopy
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody
    //     let stateCopy = {...state, messages: [...state.messages]}
    //     stateCopy.newMessageBody = ''
    //     stateCopy.messages.push({id: v1(), message: body})
    //     return stateCopy
    // }
    //
    // return state
}

export const sendMessageCreatorAC = (newMessageBody: string) => {
    return (
        {
            type: SEND_MESSAGE,
            newMessageBody: newMessageBody
        } as const
    )
}
// export const updateNewMessageBodyCreatorAC = (newBody: string) => {
//     return (
//         {
//             type: UPDATE_NEW_MESSAGE_BODY,
//             newBody
//         } as const
//     )
// }

