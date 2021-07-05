import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../assets/images/user.png';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotaUserCount(response.data.totalCount);
                });
        }
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span 
                        onClick={(e) => { this.onPageClick(p) }} 
                        className={this.props.currentPage === p && s.selectedPage}>{p}</span>;
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.photo} />
                        </div>
                        <div>
                            {u.folowed ?
                                <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button> :
                                <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>

                </div>)}
            </div>
        )
    }
}

export default UsersAPIComponent;