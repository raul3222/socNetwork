import React from 'react';
import s from './MyPosts.module.css';
//import Post from './Post/Post';
import MyPosts from './MyPosts';
//import StoreContext from '../../../StoreContext';
import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profileReducer';
import {connect} from 'react-redux';



// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {
        
//         (store) => {
//           let state = store.getState();

//           let addPost = () => {
//       store.dispatch(addPostActionCreator());
//           }
       
//           let changePost = (text) => {
//            store.dispatch(updatePostActionCreator(text));
//           }
//           return (
//             <MyPosts
//               updatePostFromBll={changePost}
//               addPost={addPost}
//               posts={state.profilePage.posts}
//               valueFromBll={state.profilePage.valueFromBll} />
//           )



//         }d
//       }
// </StoreContext.Consumer>
//   )
  
// }

let mapStateToProps = (state) => {

  return{
    posts: state.profilePage.posts,
   // valueFromBll: state.profilePage.valueFromBll
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    }
    // updatePostFromBll: (text)=>{
    //   dispatch(updatePostActionCreator(text));
    // }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;