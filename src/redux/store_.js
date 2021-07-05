import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
let store = {
     _state: {
        profilePage:{
            posts: [
                {id:1, message: 'post1', like: 10}, 
                {id:2, message: 'post2', like: 16}
              ],
              valueFromBll: 'Default value'
        },
        dialogsPage: {
            dialogs: [
                {id:1, name: 'Raul'},
                {id:2, name: 'Nastya'},
                {id:3, name: 'Tima'},
                {id:4, name: 'Emik'},
                {id:5, name: 'Temych'}    
            ],
            messages: [
                {id:1, message: 'Hi'},
                {id:2, message: 'How are you?'},
                {id:3, message: 'YO'}
            ],
            mesBll: ''
        }, 
        sidebar: {
            friends: [
                'Olga',
                'Iza',
                'Kate'
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber (){
        console.log('dsa');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) { 
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        debugger;
        this._callSubscriber(this._state);
    }
}





export default store;