import {ActionsTypes} from "./Store_Actions";

export type SidebarType = {}

let initialState = {
    sidebar: {}
}
const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {


    return state
}
export default sidebarReducer