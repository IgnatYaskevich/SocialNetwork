import React from "react";
import {DialogsPageType} from "../../redux/Store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType ={
    dialogPage: DialogsPageType
}
type  MaDispatchToPropsType ={
    updateNewMessageBody: (body: string)=>void
    sendMessage: (newMessageBody: string)=>void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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
export const DialogsContainer = connect<MapStateToPropsType,MaDispatchToPropsType,{},AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)