import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import { withAuthRedirectHoc } from '../hoc/withRedirect';
import { compose } from 'redux';



// const DialogsContainer = (props) =>{

   

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) =>{
//                     let state = store.getState();

//                     //  let dialogsElements = state.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
//                     //  let messagesElements = state.dialogsPage.messages.map(message => <Message message={message.message} />);
                      
//                      //let newMessage = React.createRef();
                      
//                       let sendMessage = () =>{
//                          store.dispatch(addMessageActionCreator());
//                       }
//                       let updateMessage = (text) =>{
//                           store.dispatch(updateMessageActionCreator(text));
//                       }
//                return(

               
//        <Dialogs 
//        updateMessage={updateMessage} 
//        sendMessage={sendMessage} 
//        mesBll={state.dialogsPage.mesBll} 
//        //dialogsElements={dialogsElements}
//        dialogsPage={state.dialogsPage}
//        />
//        )
//     }
//             }
//        </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        mesBll: state.dialogsPage.mesBll,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (message) =>{
            dispatch(addMessageActionCreator(message));
        }
        // updateMessage: (text) => {
        //     dispatch(updateMessageActionCreator(text))
        // }
    }
}



// let authRedirect = withAuthRedirectHoc(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirect);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHoc
)(Dialogs);

// DialogsContainer;