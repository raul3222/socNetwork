import { userAPI } from "../api/api";
import { updateObjInArray } from "../utils/objectHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE  = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};
const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case FOLLOW:
          return{
            ...state, 
            users: updateObjInArray(state.users, action.userId, "id", {followed: true})
            // users: state.users.map(u => {
            //     if(u.id === action.userId)
            //       return {...u, followed: true}

            //     return u;
            // })
          }   
        case UNFOLLOW:
          return{
            ...state, 
            users: updateObjInArray(state.users, action.userId, "id", {followed: false})
            // users: state.users.map(u =>{
            //   if(u.id === action.userId)
            //       return {...u, followed: false}

            //   return u;
            // })
          }
        case SET_USERS:
          return{...state, users: action.users} 
                                                                    
        case SET_CURRENT_PAGE:
          return{...state, currentPage: action.currentPage}   

        case SET_TOTAL_USER_COUNT:
          return {...state, totalUserCount: action.totalUserCount} 

        case TOGGLE_IS_FETCHING:
          return{...state, isFetching: action.isFetching}  

        case TOGGLE_FOLLOWING_IN_PROGRESS:
          return {...state, 
            followingInProgress: action.isFet
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId )

          }   

        default: 
            return state;
    }
}

export const followAC = (userId) => {
    return {
      type: FOLLOW,
      userId
    }
  }
export const unfollowAC = (userId) =>{
    return {
      type: UNFOLLOW,
      userId
    }
  }
export const setUsers = (users) => {
  return{
    type: SET_USERS,
    users
  }
}
export const setCurrentPage = (currentPage) => {
  return{
    type: SET_CURRENT_PAGE,
    currentPage
  }
}
export const setTotalUserCount = (totalUserCount)=>{
  return{
    type: SET_TOTAL_USER_COUNT, totalUserCount
  }
}
export const toggleIsFetching = (isFet)=>{
  return{
    type: TOGGLE_IS_FETCHING,
    isFet
  }
}
export const toggleFollowingInProgress = (isFet, userId) =>{
  return {
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFet, userId
  }
}

export const requestUsers = (currentPage, pageSize) =>{
  return (dispatch) =>{
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
     userAPI.getUsers(currentPage, pageSize)
    .then((data) => {
       dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
    });
  }
}

const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => { //одинаковую логику из follow и unfollow санок вынес в отдельную ф-цию
  dispatch(toggleFollowingInProgress(true, userId)); 
    let data = await apiMethod(userId)
        if(data.resultCode === 0){
            dispatch(actionCreator(userId)) 
        }
        dispatch(toggleFollowingInProgress(false, userId));
}

export const unfollow = (userId) => {  //санка
  return async (dispatch) =>{
    let apiMethod = userAPI.unfollow.bind(userId);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowAC);
  }
}

export const follow = (userId) => {  //санка
  return async (dispatch) =>{
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userId), followAC);
  }
}
export default usersReducer;