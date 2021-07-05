import axios from "axios";
import { authAPI } from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';


let initialState = {
  userId: null, 
  login: null, 
  email: null,
  isAuth: false,
  // loginForm: '',
  // passwForm: '',
  rememberMe: false
};
//Смотри в dialogReducer короткую запись копирования state-a
const authReducer = (state = initialState, action) =>{

    switch(action.type){
        case SET_USER_DATA:
          return {
            ...state, 
            ...action.data       
          }
        case SET_LOGIN:
          return {...state, loginForm:action.login, passwForm: action.passw, remember: action.rememberMe}
             
    
        default: 
            return state;
    }
}

export const setUserData = (userId, login, email, isAuth) => {
    return {
      type: SET_USER_DATA, 
      data:{userId, login, email, isAuth}
    }
  }
  // export const setLogin = (login, passw, rememberMe) => {
  //   return {
  //     type: SET_LOGIN, 
  //     login, passw, rememberMe
  //   }
  // }

  export const auth = () =>{
    return (dispatch) => {
    return  authAPI.authMe()
        .then((responce) => {
            if(responce.data.resultCode===0){
                let {id, login, email} = responce.data.data;
                dispatch(setUserData(id, login, email, true)); 
            }
        })
    }
  }

  export const loginTC = (login, passw, rememberMe) =>{
    
    return (dispatch) => {
      
 
      authAPI.loginn(login, passw, rememberMe)
        .then((responce) => {
            if(responce.data.resultCode===0){
               // dispatch(setLogin(login, passw, rememberMe)); 
               dispatch(auth());
            }
            else{
              let message = responce.data.messages.length > 0 ? responce.data.messages[0] : ''
              dispatch(stopSubmit('login', {_error: message}));
            }
        })
    }
  }

  export const logout = () =>{
  
    return (dispatch) => {
      authAPI.logout()
        .then((responce) => {
          //debugger
            if(responce.data.resultCode===0){
               // dispatch(setLogin(login, passw, rememberMe)); 
               dispatch(setUserData(null, null, null, false));
               //dispatch(auth());
            }
        })
    }
  }
export default authReducer;