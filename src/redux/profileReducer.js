import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  posts: [
    {id:1, message: 'post1', like: 10}, 
    {id:2, message: 'post2', like: 16}
  ],
  valueFromBll: '',
  profile: null,
  userStatus: ''
};
//Смотри в dialogReducer короткую запись копирования state-a
const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:{
          let postBody = action.post;
         return{
           ...state, posts: [...state.posts, {id:3, message:postBody, like:0}] 
         }}
         
         
        
        // case UPDATE_POST:
        //   {
        //     let copyState = {...state};
        //    updatePostFromBll(copyState, action.valueFromUi);
        //     return copyState;}
        case SET_USER_PROFILE:
          return{...state, profile: action.profile}
        case SET_USER_STATUS:
          return {...state, userStatus: action.status}
        case DELETE_POST:
            return{...state, posts: state.posts.filter(p=> p.id != action.idPost)}
        default: 
            return state;
    }
}

// let addPost = (post) => {
//     let newPost = {
//         id: 3,
//         message: post,
//         like: 1
//     }
//     return newPost;
    
//     //state.posts.push(newPost);
//     //state.valueFromBll='';
    
//    // this.rerenderEntireTree(state.state);
// }

//   let updatePostFromBll= (state, valueFromUi) => {
     
//    state.valueFromBll = valueFromUi;
  
//     //this.rerenderEntireTree(this._state);
// }

export const setUserStatus = (status) => {
    return {
      type: SET_USER_STATUS, status
    }
}

export const addPostActionCreator = (post) => {
    return {
      type: ADD_POST, post
    }
  }
export const deletePost = (idPost) =>{
    return{
      type: DELETE_POST, idPost
    }
}
export const updatePostActionCreator = (text) =>{
    return {
      type: UPDATE_POST,
      valueFromUi: text
    }
  }
  export const setUserProfile = (profile) =>{
    return{
      type:SET_USER_PROFILE,
      profile
    }
  }

 export const getUserProfile = (userId) => {
   return async (dispatch) => {
   let data = await userAPI.getUserProfile(userId)
    
      dispatch(setUserProfile(data));
   }
 }

 export const getUserStatus = (userId) => {
  return (dispatch) => {
   profileAPI.getUserStatus(userId)  // Здесь использую then с промисом. Выше использую await. код выше короче
   .then(data => {
     
     dispatch(setUserStatus(data));
   });
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
   profileAPI.updateUserStatus(status)
   .then(data => {
     if(data.resultCode===0)
     dispatch(setUserStatus(status));
   });
  }
}
export default profileReducer;