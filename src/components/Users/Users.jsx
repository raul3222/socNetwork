import React from 'react';
import s from './Users.module.css';
import userPhoto from '../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../api/api';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {

    return(
        <div>
            <Paginator
                totalUserCount={props.totalUserCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageClick={props.onPageClick}
               />
           <div>
            {props.users.map(u =>
                <User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    key={u.id} //Не понимаю зачем это нужно
                />)}
                </div>
    </div>
    )
}
export default Users;