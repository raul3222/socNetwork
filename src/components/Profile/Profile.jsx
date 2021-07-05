import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';

// export let PostsData = [
//   {id:1, message: 'post1', like: 10}, //Перенесли это из МайПостс
//   {id:2, message: 'post2', like: 16}
// ]
//let postElements = props.state.profilePage.posts.map(posts => <Post message = {posts.message} like = {posts.like}/>);

const Profile = (props) => {

    return <div className={s.content}>
    <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateStatus={props.updateUserStatus}/>
    <MyPostsContainer 

    />
  </div>
}

export default Profile;