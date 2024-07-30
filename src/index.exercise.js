// 🐨 you'll need to import react and createRoot from react-dom up here
import React from 'react'
import ReactDOM from 'react-dom/client'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

// EC1
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
function App() {
  const [activeDialog, setActiveDialog] = React.useState(null)

  function BookshelfDialog({name, children}) {
    function closeDialog() {
      setActiveDialog(null)
    }
    return (
      <Dialog isOpen={activeDialog === name} aria-label={`${name}-dialog`}>
        <button
          onClick={() => {
            closeDialog()
          }}
        >
          Close
        </button>
        {children}
      </Dialog>
    )
  }
  function handleLogin(formData) {
    console.log('login', formData)
  }
  function handleRegister(formData) {
    console.log('register', formData)
  }

  function CredentialsForm({submitHandler, buttonText}) {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault()

            const {username, password} = event.target

            submitHandler({
              username: username.value,
              password: password.value,
            })
          }}
        >
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <div>
            <input type="submit" value={buttonText}></input>
          </div>
        </form>
      </div>
    )
  }

  return (
    <>
      <Logo height="80" width="80"></Logo>
      <h1>Bookshelf</h1>
      <BookshelfDialog name="login">
        <h3>Login</h3>
        <CredentialsForm
          submitHandler={handleLogin}
          buttonText="Login"
        ></CredentialsForm>
      </BookshelfDialog>
      <BookshelfDialog name="register">
        <h3>Register</h3>
        <CredentialsForm
          submitHandler={handleRegister}
          buttonText="Register"
        ></CredentialsForm>
      </BookshelfDialog>

      <div>
        <button onClick={() => setActiveDialog('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setActiveDialog('register')}>Register</button>
      </div>
    </>
  )
}
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
