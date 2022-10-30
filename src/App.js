import './App.css';
import { Modal } from './Components/Modal/index'
import { useState } from 'react'
import React from 'react';

function App() {
  window.React = React

  const [isValid, setIsValid] = useState(true)

  const handleModalResponse = () => {
    setIsValid(false)
  }

  return (
    <>
      {isValid ? <Modal text="your success message here !" handleResponse={handleModalResponse} /> : ''}
    </>
  )
}

export default App;
