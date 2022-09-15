import React, {useState} from 'react';
import '../index.css';

export default function TextForm(props){
  const [text, setText] = useState('');
  const handleBoldClick = ()=>{
    let textBold = text.bold();
    setText(textBold);
  }
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

  const [bgChange, bgChangeFunc] = useState({
    color: '#333',
    backgroundColor: '#fff'
  })
  const handleMode = ()=>{
    if(bgChange.color == '#fff'){
      bgChangeFunc({
        color: '#333',
        backgroundColor: '#fff'
      });
      modeNameFunc('Light Mode');
    }
      else{
        bgChangeFunc({
          color: '#fff',
          backgroundColor: '#333'
        });
        modeNameFunc('Dark Mode');
      }
    }
    const [modeName, modeNameFunc] = useState('Dark Mode')


  return(
    <>
    <div className='container-fluid full-height' style={bgChange}>
    <div><button type="button" className="btn btn-dark" onClick={handleMode}>{modeName}</button></div>
    <div className="container">
      <div className="mt-3">
        <h2>Add content</h2>
        <textarea className="form-control" id="myText" rows="7" onChange={handleOnChange} value={text}></textarea>
        <div className="d-flex justify-content-between align-items-center">
          <div>
          <button type="button" className="btn btn-secondary my-3 rounded-0" onClick={handleBoldClick}><b>B</b></button>
            <button type="button" className="btn btn-primary my-3 ms-3 rounded-0" onClick={handleUpClick}>Uppercase</button>
            <button type="button" className="btn btn-warning my-3 ms-3 rounded-0" onClick={handleLowClick}>Lowercase</button>
            <button type="button" className="btn btn-success my-3 ms-3 rounded-0" onClick={handleCopyClick}>Copy to clipboard</button>
            <button type="button" className="btn btn-danger my-3 ms-3 rounded-0" onClick={handleClearClick}>Clear Text</button>
          </div>
          <div className="text-end text-secondary">{text.split(" ").length} words / {text.length} characters</div>
        </div>
        <hr />
        <h2>Preview</h2>
        <div className="text-end text-secondary mb-4">{0.08 * (text.split(" ").length)} Minutes to read</div>
        <div>{text}</div>
      </div>
    </div>
  </div>
    </>
  )};
