import { useState } from 'react'
import './App.css'

function App() {

  

  return (
    <>
      
    </>
  )
}

export default App


/**
 * Complete design structure for the app
 * 1st level componenet-> App
 * 2nd Level components- picture, wordspace, keyboard
 * picture -> based on number of letters wrongly guessed- add a line
 * wordspace -> write the words which are fixed
 * keyboard-> all letters and as a letter is typed, make changes to it i.e. make it shallow and non clickable
 * 
 * all components will be interacting with each other, hence states will be in 1st level components
 * 
 *           picture-> current number of lines, based on wrongly guessed letters
 *           wordspace-> correctly guessed letters
 *           keyboard-> all guessed letters
 *           
 */