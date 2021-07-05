import React from 'react';
import s from './Users.module.css';
import userPhoto from '../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../api/api';
import Paginator from '../common/Paginator/Paginator';

let Users = (props) => {
    //let u = props.user;
    let { user } = props;
    return(
        <div>
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/'+ user.id}>
                    <img src={user.photos.small ? user.photos.small : userPhoto} className={s.photo} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={props.followingInProgress.some(id => id===user.id)} onClick={() => { 
                         props.unfollow(user.id);
                        }}>unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id===user.id)} onClick={() => { 
                            props.follow(user.id);
                           }
                            }>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>

        </div>
    </div>
    )
}
export default Users;