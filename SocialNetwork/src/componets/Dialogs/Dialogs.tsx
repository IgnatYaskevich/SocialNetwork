import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import state, {DialogsType, MessagesType} from "../../redux/State";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]


}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)  // MAP- метод массив. Преобразует массив в массив других элементов
    let messagesElements = props.messages.map((m) => <Message message={m.message}/>)

                           /*  создали сслылку на элемент */
    let newSendMessage = React.createRef<HTMLTextAreaElement>()
    /*  -----------------------------------------------------------*/

      /* Ф-ия котороя вызывается при нажатии на кнопку */
    let sendMessage=()=>{
        let textMessage = newSendMessage.current?.value
        alert(textMessage)
    }
    /* --------------------------------------------------------------*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <div>
                    <textarea  placeholder='Enter a message' ref={newSendMessage}/>
                    <button className={s.sendMessage} onClick={sendMessage} >SEND</button>
                </div>
            </div>
        </div>


    )
}


export default Dialogs;