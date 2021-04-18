import {v1} from "uuid";
import {ActionsTypes} from "./Actions";


export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type  ProfilePropsType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null,
        vk: string
        twitter: string,
        instagram: string,
        youtube: null,
        github: string
        mainLink: null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: string
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 10},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
    ],
    newPostText: '',
    profile: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state, posts: [...state.posts]}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT : {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        default :
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const
export const setUserProfile = (profile: string) => ({type: SET_USER_PROFILE, profile}) as const

