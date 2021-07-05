import React from 'react';
import {connect} from 'react-redux';
import store from '../../redux/redux-store';
import Users from './Users';
import * as axios from 'axios';
import Preload from '../common/Preload/Preload'
import { unfollow, follow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleFollowingInProgress, requestUsers } from '../../redux/usersReducer';
import {getUsers, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/usersSelectors';
import { withAuthRedirectHoc } from '../hoc/withRedirect';
import {compose} from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
           
            this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        }
    }
    onPageClick = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);           Проверить на работе!!!!
        // userAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });

        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return (
            <>
            {this.props.isFetching ? <Preload/> : null}
           <Users 
           onPageClick={this.onPageClick}
           currentPage={this.props.currentPage}
           totalUserCount={this.props.totalUserCount}
           pageSize={this.props.pageSize}
           follow={this.props.follow}
           unfollow={this.props.unfollow}
           users={this.props.users}
           followingInProgress={this.props.followingInProgress}
           toggleFollowingInProgress = {this.props.toggleFollowingInProgress}

           />
           </>
        )
    }
}
let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state), 
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// let mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage, 
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) =>{
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) =>{
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users)); 
//         },
//         setCurrentPage: (pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotaUserCount: (totalUserCount)=>{
//             dispatch(setTotalUserCountAC(totalUserCount));
//         },
//         toggleIsFetching: (isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, 
        setTotalUserCount, toggleIsFetching, toggleFollowingInProgress, requestUsers}),
    withAuthRedirectHoc
)(UsersContainer)

// export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, 
//     setTotalUserCount, toggleIsFetching, toggleFollowingInProgress, getUsers})(UsersContainer);

//export default UsersContainer;