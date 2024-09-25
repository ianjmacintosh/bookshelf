import * as React from 'react'
import {queryCache} from 'react-query'
import * as auth from 'auth-provider'
import {client} from 'utils/api-client'
import {useAsync} from 'utils/hooks'
import {FullPageSpinner} from 'components/lib'
import * as colors from 'styles/colors'

const AuthContext = React.createContext()

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthContext provider`)
  }
  return context
}

function AuthProvider({children}) {
  async function getUser() {
    let user = null

    const token = await auth.getToken()
    if (token) {
      const data = await client('me', {token})
      user = data.user
    }

    return user
  }

  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync()

  React.useEffect(() => {
    run(getUser())
  }, [run])

  const login = form => auth.login(form).then(user => setData(user))
  const register = form => auth.register(form).then(user => setData(user))
  const logout = () => {
    auth.logout()
    queryCache.clear()
    setData(null)
  }

  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isError) {
    return (
      <div
        css={{
          color: colors.danger,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Uh oh... There's a problem. Try refreshing the app.</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  if (isSuccess) {
    const props = {user, login, register, logout}
    return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
  }
}

export {AuthProvider, useAuth}
