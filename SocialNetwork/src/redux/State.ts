let onChange = () => {
    console.log('Hello')
}
export const subscribe = (callback: () => void) => {
    onChange = callback
}


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export  type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: PostsType[]
    NewPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type SidebarType = {}
export type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}


//  как упаковать даннные в переменную(объект) и решить вопрос с проксами
// 1.Передаюм переменную state в index.tsx (state(имя):{state(сама переменная}
// 2.Дальше необходимо в App.tsx  передать типизацию переменной state.
// 3.В App создаём TYPE и закидываем тип переменной STATE
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: `It's my first post`, likesCount: 23},
            {id: 3, message: `It's my first post`, likesCount: 23},
            {id: 4, message: `It's my first post`, likesCount: 23},
        ],
        NewPostText: 'WWWW',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Ignat'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Pety'}
        ],
        messages: [
            {id: 1, message: 'how are you'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo MazaFaka'},
            {id: 4, message: 'ProLead'},
            {id: 5, message: 'life is good'},
            {id: 6, message: 'PPPRew q '}
        ]
    },
    sidebar: {}
}


export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: 5,
        message: state.profilePage.NewPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    // rerenderEntireTree(state)
    onChange()
}
//

export const changeNewTextPost = (newText: string) => {
    state.profilePage.NewPostText = newText
    // rerenderEntireTree(state)
    onChange()
}


export default state;