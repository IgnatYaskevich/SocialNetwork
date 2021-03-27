import {ActionsTypes, DialogsType, MessagesType} from "./Store";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

type InitialStateType = {
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

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newBody

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: v1(), message: body})
    }

    return state
}

export const sendMessageCreator = (newMessageBody: string) => {
    return (
        {
            type: SEND_MESSAGE,
            newMessageBody: newMessageBody
        } as const
    )
}
export const updateNewMessageBodyCreator = (body: string) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_BODY,

            newBody: body
        } as const
    )
}

export default dialogsReducer