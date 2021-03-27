import React from "react"
import {ActionsTypes, ProfilePageType} from "../../../redux/Store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    let addPost = () => {
        props.dispatch(addPostCreator())
    }
    let onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextCreator(text))
    }
    return (<MyPosts
        posts={props.profilePage.posts}
        NewPostText={props.profilePage.NewPostText}
        addPost={addPost}
        onPostChange={onPostChange}
    />)
}
