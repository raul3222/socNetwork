import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {loginTC} from '../../redux/authReducer';
import { required } from '../../utils/validators/validator';
import { Input } from '../common/FormsControls/FormsControls';
import {Redirect} from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';
import { createField } from '../common/FormsControls/FormsControls';
const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                {createField('Login', 'login', Input, [required])}
                {createField('Password', 'password', Input, [required], {type: "password"})}
                {createField(null, 'rememberMe', Input, [], {type: "checkbox"}, "Remember me")}
                

           
            {/* <div><Field placeholder='Login' name="login" component={Input} type="text" validate={[required]}/></div>
            <div><Field placeholder='Password' name="password" component={Input} type="password" validate={[required]} /></div>
            <div><Field component={Input} type='checkbox' name='rememberMe'/> remember me</div> */}
            {props.error?<div className={s.formError}> {props.error} </div> : '' 
            }

            <div><button>Login</button></div>
           
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm);

  const Login = (props) =>{
      const onSubmit = (formData) =>{
         // console.log(formData.login);
        props.loginTC(formData.login, formData.password, formData.rememberMe);
      }

      if(props.isAuth) {
          return(
              <Redirect to='/profile'/>
          )
      }
      return(
          <div>
              <h1>Login</h1>
              <LoginReduxForm onSubmit={onSubmit}/>
          </div>
      )
  }

  let mapStateToProps =(state)=> {
      return{
      isAuth: state.auth.isAuth
      }
 }
 export default connect(mapStateToProps, {loginTC})(Login);
//export default Login;