import axios from "axios";
import { authAPI } from "../api/api";
import {stopSubmit} from 'redux-form';
import {auth} from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  initialized: false
};
//Смотри в dialogReducer короткую запись копирования state-a
const appReducer = (state = initialState, action) =>{

    switch(action.type){
        case INITIALIZED_SUCCESS:
          return {
            ...state, 
            initialized: true       
          }
        default: 
            return state;
    }
}

export const initializedSucess = () => {
    return {
      type: INITIALIZED_SUCCESS
    }
  }
 
  export const initializeApp = () =>{
    return (dispatch) => {
      
   let promise = dispatch(auth());

    Promise.all([promise])
    .then(()=> {
      dispatch(initializedSucess())
    });

      
    }
  }

 
export default appReducer;