import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../components/loader/Loader'

export const Error = () => {
  const navigate = useNavigate()
  //state to control display of error message
  const [showMessage, setShowMessage] = useState(true)

  // method to redirect user when visiting unknown route
  useEffect(() => {
    //hidding error message after 3.5 seconds
    const messageTimer = setTimeout(() => {
      setShowMessage(false)
    }, 4000)

    //redirecting user after 1.5 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/')
    }, 5000)

    return () => {
      clearTimeout(messageTimer)
      clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <main className="error-main">
      {showMessage ? (
        <>
          <h1>Page Not Found.</h1>
          <p>The page you are trying to visit does not exist.</p>
          <p>You will be redirected to the homepage shortly.</p>
        </>
      ) : (
        <Loader />
      )}
    </main>
  )
}
