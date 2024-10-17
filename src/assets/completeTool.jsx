import { useState } from 'react';
import React from 'react';
import Alert from './Alert';
import UtilsTool from './tool';
export default function completeTool() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 1000); 
    };
  return (
    <div>
        <div className='Alert-space'>
        <Alert alert={alert} />
      </div>
      <UtilsTool showAlert={showAlert} />
      
    </div>
  )
}
