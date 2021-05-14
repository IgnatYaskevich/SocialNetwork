import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'a9fc8958-01b3-4641-8f40-93bd1c606f53'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
}
type AuthResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    'messages': string[]
    'fieldsErrors': [],
    'resultCode': number
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean,) {
        return instance.post<AuthResponseType>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    upDateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}