import React from 'react';
import s from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {
   
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () =>{
        debugger;
        console.log(this);
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChanged = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }
    
  render(){
      return(
          <div>
              {!this.state.editMode && 
              <div>
                  <span onClick={this.activateEditMode}>{this.props.status || '---'}</span>
              </div>
              }
              {this.state.editMode && 
              <div>
                  <input onChange={this.onStatusChanged} autoFocus='true' onBlur={this.deactivateEditMode} value={this.state.status}/>
              </div>
              }
          </div>
      )
  }
}

export default ProfileStatus;