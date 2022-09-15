import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
//import TextForm from './components/TextForm.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import TextUtility from './components/TextUtility.js';
import Alert from './components/Alert.js';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//let name = "Jayati";

function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [updateTextColor, updateTextColorMode] = useState('dark');
  const [navbar, setNavBar] = useState('light');
  const [bg, setBg] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
  }

  const toggleMode = ()=>{
   if(mode === 'light'){
      setMode('dark');
      setTextColor('light');
      showAlert('Hey! Dark Mode Enabled', 'dark');
      document.body.style.backgroundColor = "#333";
    }
    else{
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = "#fff";
      showAlert('Hey! Light Mode Enabled', 'info');
    }
  }

  const toggleDark = ()=>{
      document.body.style.backgroundColor = "#403f3f";
      updateTextColorMode('light');
      setNavBar('dark');
      setBg('dark');
  }
  const toggleBlue = ()=>{
      document.body.style.backgroundColor = "#5050a2";
      updateTextColorMode('light');
      setNavBar('dark');
      setBg('blue');
  }
  const toggleGrey = ()=>{
    document.body.style.backgroundColor = "#666";
    updateTextColorMode('light');
    setNavBar('dark');
    setBg('secondary');
  }
  const toggleLight = ()=>{
    document.body.style.backgroundColor = "#fff";
    updateTextColorMode('dark');
    setNavBar('light');
    setBg('light');
  }

return (
  <>
    <BrowserRouter>
      <Navbar title="Texutils" about="About Textutils" navbar={navbar} bg={bg} toggleLight={toggleLight} toggleBlue={toggleBlue} toggleDark={toggleDark} toggleGrey={toggleGrey} updateTextColor={updateTextColor} />
      <Routes>
       <Route path="/" element={<TextUtility  updateTextColor={updateTextColor} bg={bg}/>} />
       <Route path="/about" element={<About updateTextColor={updateTextColor} bg={bg} />} />
       <Route path="/contact" element={<Contact updateTextColor={updateTextColor} bg={bg} />} />
     </Routes>
    </BrowserRouter>
    <TextUtility updateTextColor={updateTextColor} bg={bg}/>

      {/*
         <Alert alert={alert}/>
         <Navbar title="Texutils" about="About Textutils" mode={mode} toggleMode={toggleMode} textColor={textColor}/>

         <Contact textColor={textColor}  mode={mode}/>
         <TextForm/>
      <About/>
      */}
  </>
  );
}

export default App;
