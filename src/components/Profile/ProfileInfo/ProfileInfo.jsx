import React from 'react';
import Preload from '../../common/Preload/Preload';
import s from './ProfileInfo.module.css';
import ava from '../../assets/images/user.png';
import ProfileStatusWithHook from './ProfileStatusWithHook'

const ProfileInfo = (props) => {
  if(!props.profile){
    return(
      <Preload />
    )
  }
    return (
    <div>
    <div className={s.profImg}>
      <img src='https://searchengineland.com/figz/wp-content/seloads/2019/04/content-people-social-email-whiteboad-ss-1920.jpg' />
    </div>
    <div className={s.description}>
      <div className={s.ava}>
      {props.profile.photos.small?<img src={props.profile.photos.small}/>: <img src={ava}/>}
      </div>
     
      <div>
        <ProfileStatusWithHook status={props.userStatus} updateStatus={props.updateStatus}/>
        <span>{props.profile.aboutMe}</span><br/>
        <span>{props.profile.fullName}</span><br/>
        <span>{props.profile.contacts.facebook}</span><br/>
      </div>
    </div>
    
  </div>)
}

export default ProfileInfo;