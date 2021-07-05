import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validator';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50); 
const MessageForm = (props) =>{
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name='message' type='text' validate={[required, maxLength50]}/> 
                <button>Send message</button>
            </form>
        </div>
    )
}

 const MessageReduxForm = reduxForm({
    form: 'addMessagesForm',
})(MessageForm);

export default MessageReduxForm;