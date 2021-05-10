import React, {ComponentType} from "react";
import {DialogsInitialStateType, sendMessageCreatorAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogPage: DialogsInitialStateType
}
type  MaDispatchToPropsType = {
   // updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MaDispatchToPropsType => {
    return {
        // updateNewMessageBody: (body: string) => {
        //     dispatch(updateNewMessageBodyCreatorAC(body))
        // },
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreatorAC(newMessageBody))
        }
    }
}


// ф-ия compose --- позволяет все обёртки делать последовательными.
export default compose<ComponentType>(connect<MapStateToPropsType, MaDispatchToPropsType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)