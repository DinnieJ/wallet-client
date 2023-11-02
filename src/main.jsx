import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.js'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

Amplify.configure({
  Auth: {
    region: "ap-southeast-1",
    userPoolId: "ap-southeast-1_hAZ7sXLBE",
    userPoolWebClientId: "1gvhaehnlao5vgvjn12e0vkl8a",
    oauth: {
      domain: "walletclient0c49a695-0c49a695-master.auth.ap-southeast-1.amazoncognito.com",
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      responseType: 'code',
      redirectSignIn: "http://localhost:5000/callback/"
    }
    
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode >,
)
