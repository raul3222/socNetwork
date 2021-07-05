import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import React from 'react';

let state = {
  posts: [
    {id:1, message: 'post1', like: 10}, 
    {id:2, message: 'post2', like: 16}
  ]
};

it('length of post should be incremented', () => {
  let action = addPostActionCreator("somePost");

  
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it('after deleting length of posts must be decremented', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

it('after deleting length of posts must be decremented if ID incorrect', () => {
  let action = deletePost(100);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});