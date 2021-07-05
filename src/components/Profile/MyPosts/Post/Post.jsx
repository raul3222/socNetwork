import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
  return (
      <div className={s.item}>
        <img src='https://sputnik.kg/images/101808/13/1018081344.jpg'/>
          <div>{props.message}</div>
          <div> like: {props.like}</div>
         
        
        </div>
     

  )
}

export default Post;