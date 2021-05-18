import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import {ActionsTypes} from "./Actions";
import { appReducer } from "./AppReducer";


export type AppStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// общая типизация Thunks
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

// applyMiddleware() - store  прими промежуточные слои (для запуска thunk)
export const store = createStore(reducers, applyMiddleware(thunk))


// @ts-ignore
window.store = store