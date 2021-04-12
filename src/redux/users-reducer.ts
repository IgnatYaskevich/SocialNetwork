// export type UsersPropsType = {
//     id: string,
//     followed: boolean,
//     photoUrl: string
//     fullName: string,
//     status: string,
//     location: {
//         city: string,
//         country: string
//     }
// }

export type UsersPropsType = {
    name: string
    id: string,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    }
    status: string,
    followed: boolean,
}
export type UsersPageType = {
    users: UsersPropsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}


type ActionTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>

const FOLlOW = 'FOLlOW';
const UN_FOLlOW = 'UN_FOLlOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default :
            return state
    }
}




export const followAC = (userId: string) => ({type: FOLlOW, userId} as const)
export const unFollowAC = (userId: string) => ({type: UN_FOLlOW, userId} as const)
export const setUsersAC = (users: Array<UsersPropsType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
