import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/counter'
import { Button } from '@mui/material'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';


function App() {
  const [count, setCount] = useState(0)
  const count_2 = useSelector(state => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <>
      <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <p>Welcome {user.username}</p>
                    {/* <button onClick={signOut}>Sign out</button> */}
                </div>
            )}
        </Authenticator>
    </>
  )
}

export default App
