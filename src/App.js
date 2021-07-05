import React from 'react';
import './App.css';
//import Dialogs from './components/Dialogs/Dialogs';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
// import Music from './components/Music/Music'
// import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer'; //сделали эту компоненту lazy
import UsersContainer from './components/Users/UsersContainer';
import { Route} from 'react-router-dom';
// import Login from './components/Login/Login'; // Тоже выносим в lazy
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preload from './components/common/Preload/Preload';
import { withSuspense } from './components/hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
  }


  render(){
    if(!this.props.initialized){
     return <Preload />
    }

    return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
       {/* <Route path='/profile' component={Profile}/>
       <Route path='/dialogs' component={Dialogs}/> */}
      
       <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
       <Route path='/users' render={() => <UsersContainer />}/>
       
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          

          {/* <Route path='/login' render={() => <Login />}/>  //это старый рендер. Теперь использую lazy*/}
          <Route path='/login' render={withSuspense(Login)} />
    
{/*        
       <Route path='/profile' render={() => <Profile state={props.state}/>}/>
       <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
       */}
       <Route path='/news' component={News}/>
          {/* <Route path='/music' component={Music}/> */}
          <Route path='/music' render={withSuspense(Music)} />
          {/* <Route path='/settings' component={Settings}/> */}
          <Route path='/settings' render={withSuspense(Settings)} />
       
      </div>
    </div>
  
  )
      }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default connect(mapStateToProps, {initializeApp})(App);