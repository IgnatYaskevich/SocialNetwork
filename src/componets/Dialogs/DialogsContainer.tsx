import React from "react";
import {DialogsPageType, RootStateType} from "../../redux/Store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";


type MapStateToPropsType ={
    dialogPage: DialogsPageType
}
type  MaDispatchToPropsType ={
    updateNewMessageBody: (body: string)=>void
    sendMessage: (newMessageBody: string)=>void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MaDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}
export const DialogsContainer = connect<MapStateToPropsType,MaDispatchToPropsType,{},RootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)