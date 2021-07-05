import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageReduxForm from './MessageForm';

const Dialogs = (props) =>{
 
let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
let messagesElements = props.messages.map(message => <Message message={message.message} />);

    const submit = (data) =>{
       props.sendMessage(data.message);
        data.message='';
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageReduxForm onSubmit={submit}/>
                
            </div>
            
        </div>
    )
}
export default Dialogs;