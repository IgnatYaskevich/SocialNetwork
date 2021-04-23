import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '9c834141-c332-4d1d-a35e-d6573784e0c2'
    }
})

// export const usersAPI = {
//     getUsers = (currentPage = 1, pageSize = 10){
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data
//         })
// }


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}
export const deleteUsers = (id: string)=>{
    return instance.delete(`follow/${id}`)
        .then(response=>{
            return response.data
        })
}
export const postUsers = (id: string)=>{
    return instance.post(`follow/${id}`)
        .then(response=>{
            return response.data
        })
}
