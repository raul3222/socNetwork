import * as axios from 'axios';
import {setUserProfile} from '../redux/profileReducer';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "085aacbc-3143-4e7c-b74b-de0140431194"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data;
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(responce => responce.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(responce => responce.data)
    },
    getUserProfile(userId){
        console.warn('Old method. Please use profileAPI');
        return profileAPI.getUserProfile(userId)

    }
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
        .then(responce =>{
            return responce.data
        });
    },

    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
        .then(responce =>{
            return responce.data
        })
    },
    updateUserStatus(status){
        return instance.put('profile/status', {status: status})
        .then(responce =>{
            return responce.data
        })
    }
}

export const authAPI = {
    authMe(){
        return instance.get('auth/me')
    },
    loginn(login, passw, rememberMe){
        return instance.post('auth/login', {email:login, password:passw, rememberMe})
    },
    logout(){
        return instance.delete('auth/login');
    }
}

