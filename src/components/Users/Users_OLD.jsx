import React from 'react';
import s from './Users.module.css';
const Users = (props) => {

    if(props.users.length===0){
props.setUsers( [
    {id:1, urlPhoto:'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg', folowed: false, fullName: 'Raul', status: 'I\'m programmer', location: {city:'Kaliningrad', country:'Russia'}}, 
    {id:2, urlPhoto:'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg', folowed: true, fullName: 'Tima', status: 'I\'m rich', location: {city:'Kaliningrad', country:'Russia'}}, 
    {id:3, urlPhoto:'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg', folowed: false, fullName: 'Emik', status: 'I\'m programmer too', location: {city:'Amsterdam', country:'Niderlands'}}, 
    
  ]);
}

    return (
        <div>
            {props.users.map(u => <div key ={u.id}>
                <span>
                    <div>
                        <img src={u.urlPhoto} className={s.photo}/>
                    </div>
                    <div>
                       {u.folowed ?  
                       <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button>: 
                       <button onClick={()=> {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)}
        </div>
    )
}
export default Users;