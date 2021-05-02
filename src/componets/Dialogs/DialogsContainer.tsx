import React from "react";
import {
    DialogsInitialStateType,
    sendMessageCreatorAC,
    updateNewMessageBodyCreatorAC
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogPage: DialogsInitialStateType
    // isAuth: boolean
}
type  MaDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
}
// let AuthRedirectComponent = (props: any) => {
//     if (!props.isAuth) return <Redirect to={`/login`}/>
//     return <Dialogs {...props}/>
// }

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MaDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreatorAC(body))
        },
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreatorAC(newMessageBody))
        }
    }
}

let withRedirect = withAuthRedirect(Dialogs)

export const DialogsContainer = connect<MapStateToPropsType, MaDispatchToPropsType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(withRedirect)