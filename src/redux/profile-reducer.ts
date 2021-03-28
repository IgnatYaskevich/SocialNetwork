import {ActionsTypes, PostsType} from "./Store";
import {v1} from "uuid";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type InitialStateType = {
    posts: PostsType[]
    NewPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 10},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
        {id: v1(), message: `It's my first post`, likesCount: 23},
    ],
    NewPostText: '',
}


const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {
            id: v1(),
            message: state.NewPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.NewPostText = ''
        // this._onChange()

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        // this._updateNewPostText(action.newText)
        state.NewPostText = action.newText
        // this._onChange()
    }
    return state
}


export const addPostCreator = () => {
    return (
        {
            type: ADD_POST
        } as const
    )
}
export const updateNewPostTextCreator = (newText: string) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: newText
        } as const
    )
}

export default profileReducer