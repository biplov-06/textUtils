import React, { useState, useEffect } from "react";
import '../App.css'

export default function Alert(props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (props.alert) {
      setVisible(true);
  
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [props.alert]);

  return (
    <>
      {props.alert && visible && (
        <div className="Alert_div">
          <div 
            className={`alert alert-${props.alert.type} d-flex align-items-center Alert`}
            role="alert"
          >
            {props.alert.msg}
          </div>
        </div>
      )}
    </>
  );
}
