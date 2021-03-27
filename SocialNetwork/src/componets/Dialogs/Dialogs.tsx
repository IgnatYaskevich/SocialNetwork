import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import {ActionsTypes, DialogsType, MessagesType} from "../../redux/Store";
import {v1} from "uuid";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

        let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} key={v1()} id={d.id} message={' '}/>)  // MAP- метод массив. Преобразует массив в массив других элементов
    let messagesElements = props.messages.map((m) => <Message message={m.message} key={v1()}/>)
    let newMessageBody = props.newMessageBody

    let newSendMessage = React.createRef<HTMLTextAreaElement>()

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator(newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  ref={newSendMessage}/>
                    </div>
                    <div>
                        <button className={s.sendMessage} onClick={onSendMessageClick}>SEND</button>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Dialogs;