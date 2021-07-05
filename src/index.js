import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './redux/redux-store';
import  {Provider}  from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
//import {addPost, updatePostFromBll,subscribe} from './redux/state';

//ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
    
} 

rerenderEntireTree(store.getState());

store.subscribe(() =>{
    rerenderEntireTree(store.getState());
});
//ReactDOM.render(<App posts={postsData} dialogs={dialogsData} messages={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
