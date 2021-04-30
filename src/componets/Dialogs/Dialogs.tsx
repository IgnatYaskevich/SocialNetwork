import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import {v1} from "uuid";
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";
import {AuthInitialStatePropsType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogPage: DialogsInitialStateType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogPage.dialogs.map((d) =>
        <DialogItem name={d.name} key={v1()} id={d.id} message={' '}/>)
    let messagesElements = props.dialogPage.messages.map((m) =>
        <Message message={m.message} key={v1()}/>)

    let newMessageBody = props.dialogPage.newMessageBody
    let newSendMessage = React.createRef<HTMLTextAreaElement>()

    let onSendMessageClick = () => {
        props.sendMessage(newMessageBody)
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>

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
                        <button className={s.sendMessage}
                                onClick={onSendMessageClick}
                        >SEND
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

