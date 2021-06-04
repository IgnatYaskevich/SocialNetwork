import {v1} from "uuid";
import {ActionsTypes} from "./Actions";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


export type PostsType = {
    id: string
    message: string
    likesCount: number
}


type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    status: string
}


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileType
    status: string
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 10},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state, posts: [...state.posts]}
            stateCopy.posts.push(newPost)
            console.log(stateCopy)
            return stateCopy
        }
        // case UPDATE_NEW_POST_TEXT : {
        //     return {...state, newPostText: action.newText}
        // }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case SET_STATUS : {
            return {...state, status: action.status}
        }
        default :
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)


export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {

    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getUserStatusTC = (userId: number) => async (dispatch: Dispatch) => {

    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {

    let response = await profileAPI.upDateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(response.data))
    }

}


