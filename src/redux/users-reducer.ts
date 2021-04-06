export type UsersPropsType = {
    id: string,
    followed: boolean,
    photoUrl: string
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}
export type UsersPageType = {
    users: UsersPropsType[]
}

export const initialState: UsersPageType = {
    users: []
}

const FOLlOW = 'FOLlOW';
const UN_FOLlOW = 'UN_FOLlOW';
const SET_USERS = 'SET_USERS';

type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state = initialState, action: ActionTypes): UsersPageType => {
    switch (action.type) {
        case FOLlOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case UN_FOLlOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case SET_USERS : {
            return {...state, users: [...action.users]}
        }
        default :
            return state
    }
}


export const followAC = (userId: string) => ({type: FOLlOW, userId} as const)
export const unFollowAC = (userId: string) => ({type: UN_FOLlOW, userId} as const)
export const setUsersAC = (users: Array<UsersPropsType>) => ({type: SET_USERS, users} as const)

