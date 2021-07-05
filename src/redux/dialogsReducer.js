const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) =>{
  
    switch(action.type){
        
        case ADD_MESSAGE:
            return{
                ...state, 
                messages: [...state.messages, {id: 4, message: action.message}]   
        }
        default: 
            return state;
    }
}

export const addMessageActionCreator = (message) =>{
    return{
        type: ADD_MESSAGE, message
    }
}

// export const updateMessageActionCreator = (text) =>{ //Это нам больше не нужно. ReduxForm библиотека делает это сама.
//     return{
//         type: UPDATE_MESSAGE,
//         mesUi: text
//     }
// }
export default dialogsReducer;