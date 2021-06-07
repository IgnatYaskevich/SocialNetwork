import React from "react"
import {addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {AppStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MapStateType = {
    newPostText: string,
    posts: Array<PostsType>
}
type MapDispatchType = {
    addPost: (newPostText: string) => void,
    onPostChange: (text: string) => void
}
export type PropsType = MapDispatchType & MapStateType & {}

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let MapDispatchToPropsParam = (dispatch: Dispatch): MapDispatchType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
export const MyPostContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, MapDispatchToPropsParam)(MyPosts);

