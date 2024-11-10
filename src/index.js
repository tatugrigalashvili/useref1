import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  const inputRef = useRef();
  
  const buttonRef = useRef();

  useEffect(() => {
  
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);


  const showAlert = () => {
    alert('ღილაკი დაკლიკულია');
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}/>

      <button
        ref={buttonRef}
        onClick={showAlert}>დაკლიკე</button>
    </div>
  );
}



var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)