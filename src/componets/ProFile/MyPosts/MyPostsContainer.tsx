import React from "react"
import {PostsType, RootStateType} from "../../../redux/Store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {MyPosts} from "./MyPosts";


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

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        newPostText: state.profilePage.NewPostText,
        posts: state.profilePage.posts
    }
}

let MapDispatchToPropsParam = (dispatch: Dispatch): MapDispatchType => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextCreator(text))
        }
    }
}
export const MyPostContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, MapDispatchToPropsParam)(MyPosts);

