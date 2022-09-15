import React, {useState} from 'react';
import propTypes from 'prop-types';

export default function Alert(props){
  const dismiss = ()=>{
    console.log('hey')
  }
  return(
    props.alert &&
    <>
    <div id="customAlert" className={`alert alert-${props.alert.type} text-capitalize`} role="alert">
      {props.alert.msg}
      <button onClick={dismiss}> Close </button>
    </div>
    </>
  );
};
