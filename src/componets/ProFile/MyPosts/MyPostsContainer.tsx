import React from "react"
import {ActionsTypes, PostsType, ProfilePageType, RootStateType} from "../../../redux/Store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from 'redux'


type MapStateType = {
    newPostText: string,
    posts: Array<PostsType>
}

type MapDispatchType = {
    addPost: () =>void,
    onPostChange: (text: string) => void
}

type OwnProps = {}

type PropsType = MapDispatchType & MapStateType & OwnProps


export const MyPostsContainer = (props: PropsType) => {
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = (text: string) => {
        props.onPostChange(text)
    }
    return (<MyPosts
        posts={props.posts}
        NewPostText={props.newPostText}
        addPost={addPost}
        onPostChange={onPostChange}
    />)
}


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
const SuperMyPostContainer = connect<MapStateType, MapDispatchType, OwnProps, RootStateType>(mapStateToProps, MapDispatchToPropsParam)(MyPostsContainer);

export default SuperMyPostContainer