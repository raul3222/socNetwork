import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';



const ProfileStatusWithHook = (props) => {
   
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);
    const activateEditMode = () =>{
        setEditMode(true);
    }

    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChanged = (e) =>{
        setStatus(e.currentTarget.value);
    }
  
      return(
          <div>
              {!editMode && 
              <div>
                  <span onClick={activateEditMode}>{props.status || '---'}</span>
              </div>
              }
              {editMode && 
              <div>
                  <input onChange={onStatusChanged} autoFocus='true' onBlur={deactivateEditMode} value={status}/>
              </div>
              }
          </div>
      )
  }


export default ProfileStatusWithHook;