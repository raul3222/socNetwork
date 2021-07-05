import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Textarea} from '../../common/FormsControls/FormsControls';
//import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profileReducer';

const maxLength10 = maxLengthCreator(10);
const MyPostsForm = (props) =>{
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='post' type='text'  validate={[required, maxLength10]}/>
        <button>Add post</button>
      </form>
    </div>
  )
}

const MyPostsFormRedux = reduxForm({
  form: 'addPostForm'
})(MyPostsForm);

const MyPosts = (props) => {
   let postElements = props.posts.map(posts => <Post message = {posts.message} like = {posts.like}/>);

   const submit = (data) =>{
      props.addPost(data.post);
      data.post='';
   }
  return (
    <div className={s.postsBlock}>
     <h3>My posts</h3>
        <MyPostsFormRedux onSubmit={submit}/>
      <div className={s.posts}>
       
        {postElements}
 
      </div>
    </div>
  )
}

export default MyPosts;


