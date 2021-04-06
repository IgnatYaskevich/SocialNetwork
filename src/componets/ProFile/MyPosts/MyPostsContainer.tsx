import React from "react"
import {PostsType} from "../../../redux/Store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";


// export const MyPostsContainer = (props: PropsType) => {
//     let addPost = () => {
//         props.addPost()
//     }
//     let onPostChange = (text: string) => {
//         props.onPostChange(text)
//     }
//     return (<MyPosts
//         posts={props.posts}
//         newPostText={props.newPostText}
//         addPost={addPost}
//         onPostChange={onPostChange}
//     />)
// }
type MapStateType = {
    newPostText: string,
    posts: Array<PostsType>
}
type MapDispatchType = {
    addPost: () => void,
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
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
export const MyPostContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, MapDispatchToPropsParam)(MyPosts);

