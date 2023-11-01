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

Amplify.configure({
  Auth: {
    region: "ap-southeast-1",
    userPoolId: "ap-southeast-1_7x8F21tol",
    userPoolWebClientId: "1jan65n5idlaaa1s8rpg2crk31"
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode >,
)
