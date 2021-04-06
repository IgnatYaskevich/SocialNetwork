
import {v1} from "uuid";

import {ActionsTypes} from "./Actions";


export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    NewPostText: string
}
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type InitialStateType = {
    posts: PostsType[]
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 10},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
    ],
    newPostText: '',
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {


    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {
            id: v1(),
            message: state.newPostText,
            likesCount: 0
        }
        let stateCopy = {...state, posts: [...state.posts]}
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
        return stateCopy
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText
        return stateCopy
    }
    return state
}


export const addPostAC = () => {
    return (
        {
            type: ADD_POST
        } as const
    )
}
export const updateNewPostTextAC = (newText: string) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: newText
        } as const
    )
}

