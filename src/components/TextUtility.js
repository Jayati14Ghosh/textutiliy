import React, {useState} from 'react';
import propTypes from 'prop-types';
import '../index.css';

export default function TextUtility(props){
  const [text, setText] = useState('');
  const handleUpClick = ()=>{
    let textUpercase = text.toUpperCase();
    setText(textUpercase);
  }
  const handleLowClick = ()=>{
    let textLowercase = text.toLowerCase();
    setText(textLowercase);
  }
  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
  }
  const handleClearClick = ()=>{
    setText("");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  return(
    <>
    <div className={`container-fluid full-height text-${props.updateTextColor}`}>
        <div className="container">
      <div className="mt-3">
        <h2>Add content</h2>
        <textarea className={`form-control text-${props.updateTextColor} bg-${props.bg}`} id="myText" rows="7" onChange={handleOnChange} value={text}></textarea>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <button type="button" className="btn btn-primary my-3 rounded-0" onClick={handleUpClick}>Uppercase</button>
            <button type="button" className="btn btn-warning my-3 ms-3 rounded-0" onClick={handleLowClick}>Lowercase</button>
            <button type="button" className="btn btn-success my-3 ms-3 rounded-0" onClick={handleCopyClick}>Copy to clipboard</button>
            <button type="button" className="btn btn-danger my-3 ms-3 rounded-0" onClick={handleClearClick}>Clear Text</button>
          </div>
          <div className={`text-end text-${props.updateTextColor}`}>{text.length > 0 ? `${text.trim().split(/\s+/).length}` : '0'} words / {text.length} characters</div>
        </div>
        {text.length > 0 ? <hr /> : ''}

        <h2>{text.length > 0 ? 'Preview' : ''}</h2>
        <div className={`text-end  text-${props.updateTextColor} mb-4`}>{text.length > 0 ? `${0.08 * (text.split(" ").length)} Minutes to read` : '' }</div>
        <div>{text.length > 0 ? text : ''}</div>
      </div>
    </div>
  </div>
    </>
  )};
