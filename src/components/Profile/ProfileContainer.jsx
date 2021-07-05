import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {getUserProfile, setUserStatus, getUserStatus, updateUserStatus} from '../../redux/profileReducer';
import {Redirect, withRouter} from 'react-router';
import { userAPI } from '../../api/api';
import { withAuthRedirectHoc } from '../hoc/withRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push('/login');
      }
    }
    // userAPI.getUserProfile(userId)
    // .then(data => {
    //   this.props.setUserProfile(data);
    // });
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);

      

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    // .then((response) => {
    //     this.props.setUserProfile(response.data);
    // });
  }

 render(){
   return(
     <Profile {...this.props}/>
   )
 }  
}

let mapStateToProps = (state) =>({
  profile: state.profilePage.profile,
  userStatus: state.profilePage.userStatus,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})



// let withAuthRedirect = withAuthRedirectHoc(ProfileContainer);

// let WithUrlComponent = withRouter(withAuthRedirect);

// export default connect(mapStateToProps, {getUserProfile})(WithUrlComponent);

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
 // withAuthRedirectHoc
)(ProfileContainer);