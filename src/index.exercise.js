// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
function App() {
  function handleLoginClick(event) {
    alert('Login')
  }

  function handleRegisterClick(event) {
    alert('Register')
  }
  return (
    <>
      <Logo></Logo>
      <h1>Bookshelf</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </>
  )
}
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
createRoot(document.getElementById('root')).render(<App />)
// 💰 find the root element with: document.getElementById('root')
