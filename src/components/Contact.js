import React from 'react';
import propTypes from 'prop-types';


export default function Contact(props){
  return(
    <>
    <div className={`container-fluid text-${props.updateTextColor}`}>
      <div className="container py-3">
        This is contact us
      </div>
    </div>

    </>
  );
};
